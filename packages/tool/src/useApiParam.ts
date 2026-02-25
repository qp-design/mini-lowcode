import {useMemo } from "react";
import { getTaro } from './getTaro';
import {useModuleContext, useModuleRootContext} from "@brushes/component-core-mini";
import { get } from "lodash";
const Taro = getTaro();
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
    const { params : searchParams = {} } = Taro.useRouter();

    return useMemo(() => {
        let newParams = {};
        (params || []).forEach((item: {key: string; value: string}) => {
            let v = searchParams[item.key];
            if (!searchParams[item.key]) {
                v = item.value;
            }
            // @ts-ignore
            newParams[item.key] = v;
        })
        return newParams;

    }, [params]);

}