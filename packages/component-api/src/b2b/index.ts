import {get, postFormData} from '@brushes/optimize';
import {post} from "@brushes/request";

const B2B = {
  sendPhone: 'web/ml/muser/sendPhone.json',
  saveUserPhoneForPla: 'web/um/userDealer/saveUserDealerToAllot.json',
  loginIn: 'web/ml/mlogin/loginIn.json',
  ORDER_QUERY: 'web/oc/contract/queryOcContractPageForRetailer.json',
  GOOD_QUERY: 'web/rs/resourceBase/queryRsSkuPageForRetGoods.json',
  GOOD_DETAIL_QUERY: 'web/rs/resourceGoods/getResourceGoodsInfoBySkuCode.json',
  cancelContractC: '/web/oc/contract/cancelContractC.json',
  confirmReceive: '/web/oc/contract/confirmReceive.json',
  uploadGoodsFile: 'web/rs/goodsFile/uploadGoodsFileForPaas.json',
  PAYMENT_COMMIT: 'web/pte/pay/paymentCommit.json',
  queryOcContractToCensus: 'web/oc/contract/queryOcContractToCensus.json',
};
export const queryOcContractToCensus = (params = {}) => get(B2B.queryOcContractToCensus, params);

export const saveUserPhoneForPla = (params = {}) => post(B2B.saveUserPhoneForPla, params);
export const sendPhone = (params = {}) => get(B2B.sendPhone, params);
export const loginIn = (params = {}) => get(B2B.loginIn, params);
export const b2bOrderQuery = (params = {}) => get(B2B.ORDER_QUERY, params);
export const b2bGoodDetailQuery = (params = {}) => get(B2B.GOOD_DETAIL_QUERY, {...params, channelCode: 'delearchannelCode', goodsClass: 'B2B', goodsType: '00'});
export const b2bGoodQuery = (params = {}) => get(B2B.GOOD_QUERY, {...params, goodsPro: '0,1,10'});

export const cancelContractC = (params = {}) => get(B2B.cancelContractC, params);
export const confirmReceive = (params = {}) => get(B2B.confirmReceive, params);
export const uploadGoodsFile = (params = {}) => postFormData(B2B.uploadGoodsFile, params);
//财务-在线充值-返回code_url
export const paymentCommit = (params = {}) => post(B2B.PAYMENT_COMMIT, params);