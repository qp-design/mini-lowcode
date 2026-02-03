export declare const goodListIntialValue: {
    dataPic: string;
    goodsName: string;
    goodsCamount: number;
    skuName: string;
    pricesetNprice: number;
};
export declare const initialValueOrder: {
    contractSettlOpno: number;
    upmMap: {};
    rebMoney: number;
    goodsCamount: number;
    shoppingCountPrice: number;
    totalDiscountPrice: number;
    accountsSumPrice: number;
    discount: number;
    freight: number;
    comDisMoney: number;
    copyComDisMoney: number;
    shoppingType: string;
    promotionCode: string;
    promotionCodes: string;
};
export type addressInfo = {
    freight: number;
    goodsReceiptMem: string;
    goodsReceiptPhone: string;
    goodsReceiptArrdess: string;
    areaCode: string;
};
export type moduleType = {
    [v: string]: any;
    _ocPoints: Array<any>;
    _ocDiscount: Array<any>;
    _orderAddressInfo: addressInfo;
    _couponList: [];
    _selectCoupon: [];
    _shoppingList: Array<any>;
    _contractGoodsList: Array<typeof goodListIntialValue>;
    _orderDomainStr: Array<typeof initialValueOrder>;
    _ocContractSettlList: Array<any>;
    open?: boolean;
    defaultValue?: object;
    goodNum?: number;
    _skuInfo?: object;
    params?: object;
    breadList?: [];
};
export interface moduleStore {
    moduleStore: moduleType;
}
export interface ModuleState extends moduleStore {
    setModuleStore: (e: Partial<moduleType>) => void;
}
export type ModuleStore = ReturnType<typeof createModuleStore>;
export declare const createModuleStore: (initProps?: Partial<moduleStore>) => import("zustand").StoreApi<ModuleState>;
