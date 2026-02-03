export { updateShoppingGoodsNum, // 更新购物车数量
queryShoppingToContract, // 购物车到订单
saveContract, // 增加订单服务
syncContractState, // 查询订单是否创建成功 (单条)
syncContractBatchState, saveOrderToPay, // 获取支付方式
paymentCommit, // 开始支付
syncContractPayState, // 查看商品是否支付成功
calculateFreightFare, // 计算运费
getFalgSettingForPaydate, //	普通商品查询自动取消订单时间
queryAddressBymerberCode, } from "qj-b2c-api";
export declare const checkSkuSpec: (spec: Array<string>, goodsCode: string) => Promise<any>;
export declare const addCardSku: (skuId: string, count: number) => Promise<any>;
export declare const queryToContractImpl: (skuId?: string, goodsNum?: number | string) => Promise<any>;
export declare const getTotalDiscountPriceImpl: (payloadNext: any) => Promise<any>;
