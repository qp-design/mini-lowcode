import {useEffect, useRef, useState} from "react";
import {post} from "@brushes/request";
import {useModuleContext} from "@brushes/component-core";
import {useApiParam} from "@brushes/component-tool";

export const useApiComponent = (api:string, rows: number, restParams: {
    defaultValue: string;
    componentType: string;
    callbackName?: string;
    params: Array<{ key: string; value: string }> | undefined
}) => {
    const currentPage = useRef(0);
    const pageCurrent = useRef({
        page: 1
    });
    const [loading, setLoading] = useState(false);
    const params = useModuleContext(s => s.moduleStore.params);
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    const [result, setResult] = useState( restParams.componentType === 'detail' ? JSON.parse(restParams.defaultValue) : {
        total: 0,
        list: [{}]
    });
    const apiParams = useApiParam(restParams.params);

    useEffect(() => {
        (async () => {
            if(api) {
                // const func = restParams.componentType === 'detail' ? normal : query;
                if(restParams.callbackName) {
                    setModuleStore({
                        [restParams.callbackName]: query
                    })
                }
                setModuleStore({
                    _location: apiParams
                })
                query()
            }
        })()
    }, [params, api, rows, apiParams, restParams.callbackName, restParams.componentType]);
    //
    // const normal = async () => {
    //     const data = await post(api, {
    //         ...apiParams,
    //         ...params,
    //     });
    //     finallyImpl(data);
    // }

    const finallyImpl = (data: any) => {
        try {
            setResult(data || JSON.parse(restParams.defaultValue));
        } catch (err) {
            setResult(data || {});
        }
    }

    const query = async () => {
        let _error = {}
        try {
            setLoading(true);
            const data = await post(api, {
                rows: pageCurrent.current.rows || rows,
                ...pageCurrent.current,
                ...apiParams,
                ...params,
            });
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
        currentPage,
        loading
    }
}