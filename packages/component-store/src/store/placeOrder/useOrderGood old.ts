import { useEffect, useMemo, useRef, useState } from 'react';
import {
  queryToContractImpl,
  queryShoppingToContract
  // getFalgSettingForPaydate
} from './payment';
import { isEmpty } from 'lodash-es';
// import { useSyncOrderStore, orderStore } from '../store';
import {useModuleContext} from "@brushes/component-core";

export const orderGoodValue = {
  shoppingGoodsId: '',
  goodsNum: 0,
  skuId: '',
  refreshNum: 0
};

export const goodListIntialValue = {
  dataPic: '',
  goodsName: '',
  goodsCamount: 0,
  skuName: '',
  pricesetNprice: 0
};

export const initialValueOrder = {
  contractSettlOpno: 0,
  shoppingCountPrice: 0,
  totalDiscountPrice: 0,
  accountsSumPrice: 0,
  discount: 0,
  freight: 0,
  comDisMoney: 0,
  copyComDisMoney: 0,
  shoppingType: '',
  promotionCode: '',
  promotionCodes: ''
};

export const useOrderGood = ({ shoppingGoodsId, goodsNum, skuId }: Partial<typeof orderGoodValue>) => {
  const [list, setList] = useState<Array<typeof goodListIntialValue>>([goodListIntialValue]);
  const [payState, setPayState] = useState<Array<typeof initialValueOrder>>([]);
  const ocContractSettlList = useRef<Array<any>>([]); //优惠信息
  const [amount, setAmount] = useState(0);
  const freight = useModuleContext(s=>s.moduleStore.freight);
  useEffect(() => {
    (async () => {
      // 预订单详情
      // 购物车到下单页面
      if (shoppingGoodsId) {
        await initImpl(() =>
          queryShoppingToContract({
            shoppingGoodsIdStr: `[${shoppingGoodsId}]`
          })
        );
      } else {
        // 商品详情到下单页
        await initImpl(() => queryToContractImpl(skuId, goodsNum));
      }
    })();
  }, []);

  // const disCount = useMemo(() => {
  //   return orderStoreInfo.contractSettlPmoney || 0;
  // }, [orderStoreInfo]);

  const payPrice = useMemo(() => {
    const price = amount + freight;
    return price >= 0 ? price : 0;
  }, [amount, freight]);

  const initImpl = async (callback: () => Promise<any>) => {
    try {
      const data = await callback();
      computedValue(data);
    } catch (err) {}
  };

  const computedValue = (res: Array<any>) => {
    if (isEmpty(res)) {
      return;
    }
    // let shoppingGoodsList = [] as Array<any>,
        let result = [] as Array<typeof goodListIntialValue>,
      payState = [] as Array<typeof initialValueOrder>;

    res.forEach((v) => {
      const payStateConfig = Object.assign({}, initialValueOrder);
      payStateConfig.shoppingType = v.goodsType;
      // 查看商品是否促销
      v.shoppingpackageList.forEach((vk: any) => {
        payStateConfig.comDisMoney += vk.disMoney;
        payStateConfig.copyComDisMoney += vk.disMoney;

        vk.shoppingGoodsList.forEach((item: any) => {
          // shoppingGoodsList.push(item);
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
        // 优惠
        if (vk.disMoney > 0) {
          ocContractSettlList.current.push({
            contractSettlBlance: vk.promotionInType == 0 ? 'PM' : 'COP',
            contractPmode: '0',
            contractSettlGmoney: Number(vk.disMoney.toFixed(2)),
            contractSettlPmoney: Number(vk.disMoney.toFixed(2)),
            contractSettlOpno: vk.promotionCode,
            contractSettlOpemo: vk.promotionName
          });
        }
        if (vk.giftList) {
          vk.shoppingGoodsList = vk.shoppingGoodsList.map((eItem: any) => {
            // 满赠  0001
            eItem.ginfoCode = eItem.pmPromotionList.find((gift: any) => gift.pbCode == '0001').promotionCode;
            return eItem;
          });
        }
        result.push(...vk.shoppingGoodsList, ...(vk.giftList || []));
      });
      payState.push(payStateConfig);
    });
    setPayState(payState);
    setList(result);
    resultPrice(payState);
  };

  const resultPrice = (payState: Array<typeof initialValueOrder>) => {
    let amountCount = 0;
    payState.forEach((item) => {
      const { shoppingCountPrice, totalDiscountPrice, discount, comDisMoney } = item;
      amountCount += shoppingCountPrice - totalDiscountPrice - discount - comDisMoney;
    });
    setAmount(amountCount);
  };

  return {
    amount,
    list,
    payState,
    ocContractSettlList,
    payPrice,
    freight
  };
};
