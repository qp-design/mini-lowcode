type CardListType = {
    gap: number;
    children?: React.ReactNode;
    mockData?: string;
    paramsRootStore?: Array<{
        key: string;
        value: string;
    }>;
    paramsRootStoreKey?: string;
    paramsStoreKey?: string;
    cacheParamsTime?: number;
    cacheParams?: boolean;
    isSearch?: boolean;
    storeKey: string;
    callbackName?: string;
    padding: object;
    margin: object;
    storeKeyTotal?: string;
    imgKey?: string;
    num: number;
    api: string;
    defaultValue: string;
    dataPath: string;
    rows?: number;
    paramsStore?: Array<{
        key: string;
        value: string;
    }>;
    params?: Array<{
        key: string;
        value: string;
    }>;
    pagination: boolean;
    componentType: string;
};
export declare const ApiComponent: import("react").FC<CardListType>;
export {};
