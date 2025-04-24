import { useMemo } from "react";

export const useApiParam = (params: {key: string; value: string}[] | undefined) => {
    return useMemo(() => {
        // @ts-ignore
        let searchParams = new URL(document.location).searchParams;
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