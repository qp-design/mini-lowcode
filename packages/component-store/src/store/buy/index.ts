//@ts-nocheck
import { checkSkuSpec } from "../../utils";
import { message } from "antd";
import { useNavigateImpl } from "@brushes/component-tool";
import { useModuleContext } from "@brushes/component-core";

export const useBuy = (goodsType?: string) => {
  const { navigator } = useNavigateImpl();
  const _skuInfo = useModuleContext((s) => s.moduleStore._skuInfo);
  const goodNum = useModuleContext((s) => s.moduleStore.goodNum) || 1;

  const add = async (e) => {
    e.stopPropagation();
    try {
      const data = await checkSkuSpec([_skuInfo.skuName], _skuInfo.goodsCode);
      message.success(data.msg);
      setTimeout(() => {
        if (goodsType) {
          navigator(
            "/account?skuId=" +
              data.dataObj.skuId +
              "&goodsNum=" +
              goodNum +
              "&goodsType=" +
              goodsType,
          );
        } else {
          navigator(
            "/account?skuId=" + data.dataObj.skuId + "&goodsNum=" + goodNum,
          );
        }
      }, 500);
    } catch (err: any) {
      message.error(err);
    }
  };
  return {
    add,
  };
};
