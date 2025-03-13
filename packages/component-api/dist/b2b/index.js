import { get } from '@brushes/optimize';
const B2B = {
    ORDER_QUERY: 'web/oc/contract/queryOcContractPageForRetailer.json',
    GOOD_QUERY: 'web/rs/resourceBase/queryRsSkuPageForRetGoods.json',
};
export const b2bOrderQuery = (params = {}) => get(B2B.ORDER_QUERY, params);
export const b2bGoodQuery = (params = {}) => get(B2B.GOOD_QUERY, Object.assign(Object.assign({}, params), { goodsPro: '0,1,10' }));
