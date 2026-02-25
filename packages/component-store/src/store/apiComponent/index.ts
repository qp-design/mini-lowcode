//@ts-nocheck
import { useEffect, useRef, useState } from "react";
import { cacheParams, post } from "@brushes/optimize";
import {getTaro} from "@brushes/component-tool";

const Taro = getTaro();

import {
  useModuleContext,
  useModuleRootContext,
} from "@brushes/component-core-mini";
import {
  useApiParam,
  useRootStoreApiParam,
  useStoreApiParam,
} from "@brushes/component-tool";
import {get, isEmpty, rest} from "lodash";
import { useEditor } from "@craftjs/core";

export const useApiComponent = (
  api: string,
  rows: number,
  restParams: {
    defaultValue: string;
    componentType: string;
    mockData: string;
    callbackName?: string;
    storeKeyTotal?: string;
    cacheParams: boolean;
    paramsStoreKey: string;
    paramsRootStoreKey: string;
    paramsRootStore: Array<{ key: string; value: string }> | undefined;
    isSearch?: boolean;
    paramsStore: Array<{ key: string; value: string }> | undefined;
    cacheParamsTime?: number;
    dataPath: string;
    params: Array<{ key: string; value: string }> | undefined;
  },
) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const hasMore = useRef(false)

  const pageCurrent = useRef(
    rows > 0
      ? {
          page: 1,
        }
      : {},
  );
  const searchValue = useRef({});
  const setModuleRootStore = useModuleRootContext((s) => s.setModuleRootStore);
  const [loading, setLoading] = useState(false);
  const params = useModuleContext((s) => s.moduleStore.params);
  const setModuleStore = useModuleContext((s) => s.setModuleStore);
  const [result, setResult] = useState(
    restParams.componentType === "detail"
      ? JSON.parse(restParams.defaultValue)
      : [{}],
  );

  const storeParams = useStoreApiParam(
    restParams.paramsStore,
    restParams.paramsStoreKey,
  );
  const rootStoreParams = useRootStoreApiParam(
    restParams.paramsRootStore,
    restParams.paramsRootStoreKey,
  );
  const apiParams = useApiParam(restParams.params);

  useEffect(() => {
    (async () => {
      if (api) {
        // const func = restParams.componentType === 'detail' ? normal : query;
        if (restParams.callbackName) {
          setModuleStore({
            [restParams.callbackName]: query,
          });
        }
        if (restParams.isSearch) {
          setModuleRootStore({
            searchQuery: query,
          });
        }
        query();
      }
    })();
  }, [
    params,
    api,
    rows,
    apiParams,
    rootStoreParams,
    storeParams,
    restParams.callbackName,
    restParams.componentType,
  ]);

  Taro.useReachBottom(() => {
    console.log(107, hasMore.current);
    if(hasMore.current) {
      loadMore()
    }
  })

  const loadMore = async () => {
    ++pageCurrent.current.page;
    query();
  }

  const finallyImpl = (data: any, page) => {
    if (enabled && restParams.mockData) {
      const res = get(JSON.parse(restParams.mockData), restParams.dataPath, []);
      setResult(res);
      return;
    }
    try {
      const res = get(data, restParams.dataPath, JSON.parse(restParams.defaultValue));
      setResult(prevData => {
        if(page === 1) {
          return res;
        }
        return prevData.concat(res)
      });
    } catch (err) {
      setResult(data || JSON.parse(restParams.defaultValue));
    }
  };

  const query = async (searchParams = {}) => {
    if (!isEmpty(searchParams)) {
      searchValue.current = searchParams;
    }
    let _error = {};
    try {
      setLoading(true);
      const aiParams = {
        rows: pageCurrent.current.rows || rows,
        ...pageCurrent.current,
        ...apiParams,
        ...storeParams,
        ...rootStoreParams,
        ...params,
        ...searchValue.current,
      };

      const data = await post(
        api,
        restParams.cacheParams
          ? cacheParams(aiParams, restParams.cacheParamsTime || 3)
          : aiParams,
      );

      // 是否满足滚动加载
      if(data.total && rows > 0) {
        hasMore.current = data.total > rows * pageCurrent.current.page;

        console.log('=====>', data.total, pageCurrent.current);
      }

      if (restParams.storeKeyTotal) {
        setModuleStore({
          [restParams.storeKeyTotal]: {
            total: data.total,
          },
        });
      }

      finallyImpl(data, pageCurrent.current.page);

    } catch (err) {
      if (err === "游客模式" && restParams.componentType !== "detail") {
        setResult([]);
        return;
      }
      // 默写场景捕获错误代码
      _error = {
        success: false,
        msg: err,
      };
    } finally {
      setModuleStore({
        _error,
      });
      setLoading(false);
    }
  };

  return {
    result,
    loading,
    hasMore
  };
};
