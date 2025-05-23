import { initialValueOrder } from './useOrderGood';
import { useMemo } from 'react';
import {useModuleContext} from "@brushes/component-core";

export function useOrderInfo() {
  const _orderDomainStr = useModuleContext(s=>s.moduleStore._orderDomainStr);
  const { shoppingCountPrice, comDisMoney, goodsCamount } = useMemo(() => {
    const obj = {
      shoppingCountPrice: 0,
      comDisMoney: 0,
      goodsCamount: 0,
    };
    _orderDomainStr.forEach((item: typeof initialValueOrder) => {
      const { shoppingCountPrice, comDisMoney, discount, totalDiscountPrice, goodsCamount } = item;
      obj.shoppingCountPrice += shoppingCountPrice - comDisMoney - discount - totalDiscountPrice;
      obj.comDisMoney += comDisMoney;
      obj.goodsCamount += goodsCamount;
    });
    return obj;
  }, [_orderDomainStr]);

  return {
    shoppingCountPrice,
    comDisMoney,
    goodsCamount
  };
}
