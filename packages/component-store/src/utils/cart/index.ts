import {
    addShoppingGoodsBySpec,
    addShoppingGoods, // 再次购买--加入购物车
} from 'qj-b2c-api';

export const addCardSku = async (skuId: string, count: number) => {
    const payloadNext = {
        skuId,
        goodsNum: count
    };
    // 再次购买--加入购物车
    return await addShoppingGoods(payloadNext);
};

export const checkSkuSpec = async (spec: Array<string>, goodsCode: string) => {
    const payload = {
        specStr: JSON.stringify(spec),
        goodsCode
    };
    return await addShoppingGoodsBySpec(payload);
};