export declare const useDetail: (api: string, params: Array<any>) => {
    loading: boolean;
};
export declare const useSku: (dataKey: string, promotionKey: string, couponKey: string) => {
    skuListName: string[];
    specList: {
        specName: string;
        skuOption: never[];
    }[];
    onClick: (value: string, index: number) => void;
};
