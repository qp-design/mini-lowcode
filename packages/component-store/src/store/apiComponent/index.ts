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
                const func = restParams.componentType === 'detail' ? normal : query;
                if(restParams.callbackName) {
                    setModuleStore({
                        [restParams.callbackName]: func
                    })
                }
                func({})
            }
        })()
    }, [params, api, rows, apiParams, restParams.callbackName, restParams.componentType]);

    const normal = async () => {
        const data = await post(api, {
            ...apiParams,
            ...params,
        });
        finallyImpl(data);
    }

    const finallyImpl = (data: any) => {
        try {
            setResult(data || JSON.parse(restParams.defaultValue));
        } catch (err) {
            setResult(data || {});
        }
    }

    const query = async ({pageSize = rows, page = 1, ...restProps} : { pageSize?: number; page?:number}) => {
        const data = await post(api, {
            rows: pageSize,
            page,
            ...apiParams,
            ...params,
            ...restProps,
        });
        currentPage.current = page;
        finallyImpl(data);
    }

    const onChange = (page: number, pageSize: number) => {
        query({page, pageSize})
    }

    return {
        result,
        onChange,
        currentPage
    }
}