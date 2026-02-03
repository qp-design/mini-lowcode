export declare const useApiComponent: (api: string, rows: number, restParams: {
    defaultValue: string;
    componentType: string;
    mockData: string;
    callbackName?: string;
    storeKeyTotal?: string;
    cacheParams: boolean;
    paramsStoreKey: string;
    paramsRootStoreKey: string;
    paramsRootStore: Array<{
        key: string;
        value: string;
    }> | undefined;
    isSearch?: boolean;
    paramsStore: Array<{
        key: string;
        value: string;
    }> | undefined;
    cacheParamsTime?: number;
    dataPath: string;
    params: Array<{
        key: string;
        value: string;
    }> | undefined;
}) => {
    result: any;
    loading: boolean;
    hasMore: import("react").MutableRefObject<boolean>;
};
