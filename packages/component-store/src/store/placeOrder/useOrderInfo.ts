import { initialValueOrder } from './useOrderGood';
import {useMemo} from 'react';
import {useModuleContext} from "@brushes/component-core";
import {Form} from "antd";

export function useOrderInfo() {
  const form = Form.useFormInstance();
  const _ocContractSettlList = useModuleContext(s=>s.moduleStore._ocContractSettlList);
  const freight = useModuleContext(s=>s.moduleStore._orderAddressInfo.freight);
  const creditType = Form.useWatch('creditType', form);
  const _selectCoupon = useModuleContext(s=>s.moduleStore._selectCoupon) || {};
  const _orderDomainStr = useModuleContext(s=>s.moduleStore._orderDomainStr);
  const { shoppingCountPrice, creditMoney, comDisMoney, couponMoney, goodsCamount, totalMoney, rebMoney } = useMemo(() => {
    const obj = {
      shoppingCountPrice: 0,
      comDisMoney: 0,
      goodsCamount: 0,
      totalMoney: 0,
      rebMoney: 0,
      creditMoney: 0,
      couponMoney: 0,
    };
    _orderDomainStr.forEach((item: typeof initialValueOrder) => {
      const { shoppingCountPrice, comDisMoney, discount, totalDiscountPrice, goodsCamount, rebMoney } = item;
      obj.shoppingCountPrice += shoppingCountPrice - comDisMoney - discount - rebMoney - totalDiscountPrice;
      obj.totalMoney += shoppingCountPrice;
      obj.comDisMoney += comDisMoney;
      obj.rebMoney += rebMoney;
      obj.goodsCamount += goodsCamount;
    });

    // 加入优惠券信息
    if(_selectCoupon.pbCode) {

      if(_selectCoupon.pbCode === '0005') {
        obj.couponMoney = Number(obj.totalMoney * (1 - _selectCoupon.couponAmount / 100).toFixed(2))
      } else if(['0004', '0003'].includes(_selectCoupon.pbCode)) {
        obj.couponMoney = _selectCoupon.discAmount
      }

      _ocContractSettlList.push({
          contractSettlBlance: 'COP',
          contractSettlGmoney: obj.couponMoney,
          contractSettlPmoney: obj.couponMoney,
          contractSettlOpno: _selectCoupon.usercouponCode,
          contractSettlOpemo: _selectCoupon.promotionCode,
      })
    }

    if(creditType) {
      obj.creditMoney = (obj.shoppingCountPrice + freight - obj.couponMoney) * (+creditType) / 100
    }

    return obj;
  }, [_orderDomainStr, _selectCoupon, freight]);
  return {
    shoppingCountPrice,
    comDisMoney,
    rebMoney,
    couponMoney,
    goodsCamount,
    totalMoney,
    freight,
    creditMoney,
    creditType
  };
}
