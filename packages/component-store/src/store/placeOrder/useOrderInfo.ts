//@ts-nocheck
import { initialValueOrder } from "./useOrderGood";
import { useMemo } from "react";
import { useModuleContext } from "@brushes/component-core";
import { Form } from "antd";
import { PromotionInType } from "@brushes/component-tool";
import { get, isEmpty } from "lodash";

export function useOrderInfo() {
  const form = Form.useFormInstance();
  const _ocContractSettlList = useModuleContext(
    (s) => s.moduleStore._ocContractSettlList,
  );
  const _ocDiscount = useModuleContext((s) => s.moduleStore._ocDiscount);
  const pointInfo = useModuleContext((s) => s.moduleStore._ocPoints);
  const freight = useModuleContext(
    (s) => s.moduleStore._orderAddressInfo.freight,
  );
  const creditType = Form.useWatch("creditType", form);
  const contractPumode = Form.useWatch("contractPumode", form);

  const freightValue = useMemo(() => {
    return contractPumode === "0" ? freight : 0;
  }, [contractPumode, freight]);

  const points = useMemo(() => {
    if (!isEmpty(pointInfo)) {
      return get(pointInfo, "[0].contractSettlPmoney", 0);
    }
    return 0;
  }, [pointInfo]);

  const ur = useMemo(() => {
    if (!isEmpty(_ocDiscount)) {
      return get(_ocDiscount, "[0].contractSettlPmoney", 0);
    }
    return 0;
  }, [_ocDiscount]);

  const _selectCoupon =
    useModuleContext((s) => s.moduleStore._selectCoupon) || {};
  const _orderDomainStr = useModuleContext(
    (s) => s.moduleStore._orderDomainStr,
  );
  const {
    shoppingCountPrice,
    creditMoney,
    comDisMoney,
    couponMoney,
    goodsCamount,
    totalMoney,
    rebMoney,
  } = useMemo(() => {
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
      const {
        shoppingCountPrice,
        comDisMoney,
        discount,
        totalDiscountPrice,
        goodsCamount,
        rebMoney,
      } = item;
      obj.shoppingCountPrice +=
        shoppingCountPrice -
        comDisMoney -
        discount -
        rebMoney -
        totalDiscountPrice;
      obj.totalMoney += shoppingCountPrice;
      obj.comDisMoney += comDisMoney;
      obj.rebMoney += rebMoney;
      obj.goodsCamount += goodsCamount;
    });

    const list = Array.isArray(_selectCoupon) ? _selectCoupon : [_selectCoupon];

    list.forEach((item: typeof initialValueOrder) => {
      let couponList = [];
      // 加入优惠券信息
      if (item.pbCode) {
        if (["0005", "B0005"].includes(item.pbCode)) {
          obj.couponMoney = Number(
              obj.totalMoney * (1 - item.couponAmount / 100).toFixed(2),
          );
        } else if (
            ["0004", "0003", "B0004", "B0003"].includes(item.pbCode)
        ) {
          obj.couponMoney = item.discAmount;
        }
        couponList.push({
          contractSettlBlance: PromotionInType[item.promotionInType],
          contractSettlGmoney: obj.couponMoney,
          contractSettlPmoney: obj.couponMoney,
          contractSettlOpno: item.usercouponCode,
          contractSettlOpemo: item.promotionCode,
        });

      }
    })
    _ocContractSettlList.push(...couponList)

    if (creditType) {
      obj.creditMoney =
        ((obj.shoppingCountPrice + freightValue - obj.couponMoney - points) *
          +creditType) /
        100;
    }

    return obj;
  }, [_orderDomainStr, _selectCoupon, freightValue, points]);
  return {
    shoppingCountPrice,
    comDisMoney,
    rebMoney,
    couponMoney,
    goodsCamount,
    totalMoney,
    freightValue,
    creditMoney,
    creditType,
    ur,
    points,
  };
}
