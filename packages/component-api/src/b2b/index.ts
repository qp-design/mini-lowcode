import { get } from '@brushes/optimize';

const B2B = {
  sendPhone: 'web/ml/muser/sendPhone.json',
  saveUserPhoneForPla: 'web/ml/muser/saveUserPhoneForPla.json',
  loginIn: 'web/ml/mlogin/loginIn.json',
  ORDER_QUERY: 'web/oc/contract/queryOcContractPageForRetailer.json',
  GOOD_QUERY: 'web/rs/resourceBase/queryRsSkuPageForRetGoods.json',
  GOOD_DETAIL_QUERY: 'web/rs/resourceGoods/getResourceGoodsInfoBySkuCode.json'
};
export const saveUserPhoneForPla = (params = {}) => get(B2B.saveUserPhoneForPla, params);
export const sendPhone = (params = {}) => get(B2B.sendPhone, params);
export const loginIn = (params = {}) => get(B2B.loginIn, params);
export const b2bOrderQuery = (params = {}) => get(B2B.ORDER_QUERY, params);
export const b2bGoodDetailQuery = (params = {}) => get(B2B.GOOD_DETAIL_QUERY, {...params, channelCode: 'delearchannelCode', goodsClass: 'B2B', goodsType: '00'});
export const b2bGoodQuery = (params = {}) => get(B2B.GOOD_QUERY, {...params, goodsPro: '0,1,10'});
