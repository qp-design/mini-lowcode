import React, {useEffect, useRef, useState} from "react";
import {cacheParams, post} from "@brushes/optimize";
import {useModuleContext, useModuleRootContext} from "@brushes/component-core";
import {useApiParam, useRootStoreApiParam, useStoreApiParam} from "@brushes/component-tool";
import {isEmpty} from "lodash";
import {useEditor} from "@craftjs/core";


export const useApiComponent = (api:string, rows: number, restParams: {
    defaultValue: string;
    componentType: string;
    mockData: string;
    callbackName?: string;
    storeKeyTotal?: string;
    cacheParams: boolean;
    paramsStoreKey: string;
    paramsRootStoreKey: string;
    paramsRootStore: Array<{ key: string; value: string }> | undefined
    isSearch?: boolean;
    paramsStore: Array<{ key: string; value: string }> | undefined
    cacheParamsTime?: number;
    params: Array<{ key: string; value: string }> | undefined
}) => {
    const {enabled} = useEditor(
        (state) => ({
            enabled: state.options.enabled,
        }));

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

    const storeParams = useStoreApiParam(restParams.paramsStore, restParams.paramsStoreKey);
    const rootStoreParams = useRootStoreApiParam(restParams.paramsRootStore, restParams.paramsRootStoreKey);
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
    }, [params, api, rows, apiParams, rootStoreParams, storeParams, restParams.callbackName, restParams.componentType]);

    const finallyImpl = (data: any) => {
        if(enabled && restParams.mockData) {
            setResult(JSON.parse(restParams.mockData));
            return
        }
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
                ...storeParams,
                ...rootStoreParams,
                ...params,
                ...searchValue.current,
            };
            const data = await post(api, restParams.cacheParams ? cacheParams(aiParams, restParams.cacheParamsTime || 3) : aiParams);
            currentPage.current = pageCurrent.current.page;

            if(restParams.storeKeyTotal) {
                setModuleStore({
                    [restParams.storeKeyTotal]: {
                        total: data.total,
                    }
                })
            }

            finallyImpl(data);
        } catch (err) {
            if (err === '游客模式' && restParams.componentType !== 'detail') {
                setResult({list: [], total: 0})
                return
            }
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