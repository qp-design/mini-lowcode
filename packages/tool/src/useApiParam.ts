import {useMemo } from "react";
import { useSearchParams } from 'react-router-dom';
import {useModuleContext, useModuleRootContext} from "@brushes/component-core";
import { get } from "lodash";

export const useStoreApiParam = (params: {key: string; value: string}[] | undefined, key: string) => {
    const store = useModuleContext((s:any) => s.moduleStore);
    return useMemo(() => {
        if(!key) {
            return {}
        }
        const storeInner = store[key];
        let newParams: {[v:string]:any} = {};
        (params || []).forEach((item: {key: string; value: string}) => {
            if(item.value) {
                newParams[item.key] = get(storeInner, item.value, '');
            } else {
                newParams[item.key] = storeInner;
            }
        })
        return newParams;

    }, [store]);
}

export const useRootStoreApiParam = (params: {key: string; value: string}[] | undefined, key: string) => {
    const store = useModuleRootContext((s:any) => s.rootStore);
    return useMemo(() => {
        if(!key) {
            return {}
        }
        const storeInner = store[key];
        let newParams: {[v:string]:any} = {};
        (params || []).forEach((item: {key: string; value: string}) => {
            if(item.value) {
                newParams[item.key] = get(storeInner, item.value, '');
            } else {
                newParams[item.key] = storeInner;
            }
        })
        return newParams;

    }, [store]);
}

export const useApiParam = (params: {key: string; value: string}[] | undefined) => {
    const [searchParams, ] = useSearchParams();

    return useMemo(() => {
        let newParams = {};
        (params || []).forEach((item: {key: string; value: string}) => {
            let v = searchParams.get(item.key);
            if (!searchParams.has(item.key)) {
                v = item.value;
            }
            // @ts-ignore
            newParams[item.key] = v;
        })
        return newParams;

    }, [params]);

}