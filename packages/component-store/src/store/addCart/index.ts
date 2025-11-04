//@ts-nocheck
import { addCardSku } from "../../utils";
import { message } from "antd";
import { useGetCarNum } from "../getCarNum";
import { useModuleContext } from "@brushes/component-core";

export const useAddCart = () => {
  const { getGoodsList } = useGetCarNum();
  const _skuInfo = useModuleContext((s) => s.moduleStore._skuInfo) || {};
  const goodNum =
    useModuleContext((s) => s.moduleStore.goodNum) || _skuInfo.goodsMinnum || 1;
  const add = async (e: any) => {
    e.stopPropagation();
    try {
      await addCardSku(_skuInfo.skuId, goodNum);
      await getGoodsList();
      message.success("成功添加到购物车");
    } catch (err: any) {
      message.error(err);
    }
  };
  return {
    add,
  };
};
