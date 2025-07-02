import { useEffect } from 'react';
import {isEmpty} from 'lodash';
import {useModuleContext, goodListIntialValue, initialValueOrder} from "@brushes/component-core";
import {Form} from "antd";
import { PromotionInType } from "@brushes/component-tool";

export const useOrderGood = (storeKey: string) => {
  const contactData = useModuleContext(s=>s.moduleStore[storeKey]);
  const setModuleStore = useModuleContext(s=>s.setModuleStore);
  const form = Form.useFormInstance();
  const creditAccount = Form.useWatch('creditAccount', form);
  const creditType = Form.useWatch('creditType', form);
  const _selectCoupon = useModuleContext(s=>s.moduleStore._selectCoupon);
  useEffect(() => {
    computedValue(contactData, _selectCoupon);
  }, [contactData, creditType, creditAccount, _selectCoupon]);


  const computedValue = (res: Array<any>, _selectCoupon = {}) => {
    if (isEmpty(res)) {
      return;
    }
    let contractGoodsList = [] as Array<typeof goodListIntialValue>; // packageList => contractGoodsList
    let orderDomainStr = [] as Array<typeof initialValueOrder>; //
    let attrs : Set<any> = new Set([]);
    let ocContractSettlList = [] as Array<any>; // 优惠信息
    let shoppingList = [] as Array<any>; // 优惠券信息
    res.forEach((v) => {

      const payStateConfig = Object.assign({}, initialValueOrder);
      payStateConfig.shoppingType = v.goodsType;
      payStateConfig.rebMoney += v.rebMoney;
      let itemList = [] as Array<typeof initialValueOrder>;
      // 查看商品是否促销
      v.shoppingpackageList.forEach((vk: any, idx) => {
        if (!attrs.has(vk.promotionCode)) {
          payStateConfig.comDisMoney += vk.disMoney;
          payStateConfig.copyComDisMoney += vk.disMoney;
        }

        let channelInfo = {
          channelCode: '',
          channelName: ''
        };
        vk.shoppingGoodsList.forEach((item: any) => {
          shoppingList.push(item);
          channelInfo.channelCode = item.channelCode;
          channelInfo.channelName = item.channelName;
          payStateConfig.goodsCamount +=item.goodsCamount;
          payStateConfig.shoppingCountPrice += item.pricesetNprice * item.goodsCamount;
          item.contractGoodsGtype = 0;
          payStateConfig.promotionCode = vk.promotionCode;
          // 普通商品获取自动取消订单时间
          if (item.goodsType == '00') {
            // getFalgSettingForPaydate().then((res) => {
            //   if (res) {
            //     // 暂时放这里不处理
            //     // $storage.set('payTime', Number(res.flagSettingInfo));
            //   }
            // });
          }
        });

        // 优惠信息ocContractSettlList 数据指插入第一个
        if(idx === 0 && !attrs.has(vk.promotionCode)) {
          // 优惠
          if (vk.disMoney > 0) {
            ocContractSettlList.push({
              contractSettlBlance: PromotionInType[vk.promotionInType],
              contractSettlGmoney: Number(vk.disMoney.toFixed(2)),
              contractSettlPmoney: Number(vk.disMoney.toFixed(2)),
              contractSettlOpno: vk.promotionCode,
              contractSettlOpemo: vk.promotionName,
            });
          }
          // //优惠券
          // if(!isEmpty(_selectCoupon)) {
          //   ocContractSettlList.push({
          //     contractSettlBlance: 'COP',
          //     contractSettlGmoney: +_selectCoupon.couponAmount,
          //     contractSettlPmoney: +_selectCoupon.discAmount,
          //     contractSettlOpno: _selectCoupon.usercouponCode,
          //     contractSettlOpemo: _selectCoupon.promotionCode,
          //   });
          // }
          // 返利
          if (v.rebMoney > 0) {
            ocContractSettlList.push({
              contractSettlBlance: 'REB',
              contractSettlGmoney: Number(v.rebMoney.toFixed(2)),
              contractSettlPmoney: Number(v.rebMoney.toFixed(2)),
              contractSettlOpno: vk.promotionCode,
              contractSettlOpemo: vk.promotionName,
              contractSettlOpno2: channelInfo.channelCode,
              contractSettlOpno1: channelInfo.channelName
            });
          }
          // 授信
          if (creditType) {
            ocContractSettlList.push({
              contractSettlBlance: "CRP",
              contractSettlOpemo: creditType,
            });
          }
        }

        attrs.add(vk.promotionCode);
        if (vk.giftList) {
          vk.shoppingGoodsList = vk.shoppingGoodsList.map((eItem: any) => {
            // 满赠  0001
            eItem.ginfoCode = eItem.pmPromotionList.find((gift: any) => gift.pbCode == '0001').promotionCode;
            return eItem;
          });
        }
        itemList.push(...vk.shoppingGoodsList, ...(vk.giftList || []));
      });
      contractGoodsList.push(itemList);
      orderDomainStr.push(payStateConfig);
    });
    // setPayState(payState);
    setModuleStore({
      _contractGoodsList: contractGoodsList,
      _orderDomainStr: orderDomainStr,
      _shoppingList: shoppingList,
      _ocContractSettlList: ocContractSettlList
    })
  };
};
