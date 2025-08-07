import {useMemo } from "react";
import { useSearchParams } from 'react-router-dom';
import {useModuleContext} from "@brushes/component-core";
import { get } from "lodash";

export const useStoreApiParam = (params: {key: string; value: string}[] | undefined, key: string) => {
    const store = useModuleContext(s => s.moduleStore);
    return useMemo(() => {
        if(!key) {
            return {}
        }
        const storeInner = store[key];
        let newParams: {[v:string]:any} = {};
        (params || []).forEach((item: {key: string; value: string}) => {
            newParams[item.key] = get(storeInner, item.value, '');
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