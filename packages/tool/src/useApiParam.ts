import {useMemo } from "react";
import { useSearchParams } from 'react-router-dom';

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