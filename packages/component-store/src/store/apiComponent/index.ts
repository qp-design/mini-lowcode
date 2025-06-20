import React, {useEffect, useRef, useState} from "react";
import {cacheParams, post} from "@brushes/optimize";
import {useModuleContext, useModuleRootContext} from "@brushes/component-core";
import {useApiParam} from "@brushes/component-tool";
import {isEmpty} from "lodash-es";


export const useApiComponent = (api:string, rows: number, restParams: {
    defaultValue: string;
    componentType: string;
    callbackName?: string;
    cacheParams: boolean;
    isSearch?: boolean;
    cacheParamsTime?: number;
    params: Array<{ key: string; value: string }> | undefined
}) => {
    const currentPage = useRef(0);
    const pageCurrent = useRef(rows > 0 ? {
        page: 1
    } : {});
    const searchValue = useRef({});
    const setModuleRootStore = useModuleRootContext(s=>s.setModuleRootStore);
    const [pageSize, setPageSize] = React.useState(rows);
    const [loading, setLoading] = useState(false);
    const params = useModuleContext(s => s.moduleStore.params);
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    const [result, setResult] = useState( restParams.componentType === 'detail' ? JSON.parse(restParams.defaultValue) : {
        total: 0,
        list: [{}]
    });
    const apiParams = useApiParam(restParams.params);

    useEffect(() => {
        setPageSize(rows)
    }, [rows]);

    useEffect(() => {
        (async () => {
            if(api) {
                // const func = restParams.componentType === 'detail' ? normal : query;
                if(restParams.callbackName) {
                    setModuleStore({
                        [restParams.callbackName]: query
                    })
                }
                if(restParams.isSearch) {
                    setModuleRootStore({
                        searchQuery: query,
                    })
                }
                query();
            }
        })()
    }, [params, api, rows, apiParams, restParams.callbackName, restParams.componentType]);

    const finallyImpl = (data: any) => {
        try {
            setResult(data || JSON.parse(restParams.defaultValue));
        } catch (err) {
            setResult(data || {});
        }
    }

    const query = async (searchParams = {}) => {
        if(!isEmpty(searchParams)) {
            searchValue.current = searchParams;
        }
        let _error = {}
        try {
            setLoading(true);
            const aiParams = {
                rows: pageCurrent.current.rows || rows,
                ...pageCurrent.current,
                ...apiParams,
                ...params,
                ...searchValue.current,
            };
            const data = await post(api, restParams.cacheParams ? cacheParams(aiParams, restParams.cacheParamsTime || 3) : aiParams);
            currentPage.current = pageCurrent.current.page;
            finallyImpl(data);
        } catch (err) {
            // 默写场景捕获错误代码
            _error = {
                success: false,
                msg: err
            }
        } finally {
            setModuleStore({
                _error
            })
            setLoading(false);
        }

    }

    const onChange = (page: number, pageSize: number) => {
        setPageSize(pageSize);
        pageCurrent.current = {
            ...pageCurrent.current,
            page,
            rows: pageSize,
        }
        query()
    }

    return {
        result,
        onChange,
        pageSize,
        currentPage,
        loading
    }
}