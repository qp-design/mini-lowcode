//@ts-nocheck
import { post } from "@brushes/request";
import { useModuleRootContext } from "@brushes/component-core";

export const useGetCarNum = () => {
  const setModuleRootStore = useModuleRootContext((s) => s.setModuleRootStore);
  const getGoodsList = async (params?: object) => {
    try {
      const data = await post(
        "web/oc/shopping/queryShoppingGoodsByUser.json",
        params,
      );
      setModuleRootStore({
        _cart: data.list.length ? data.list.length : 0,
      });
    } catch (err: any) {}
  };
  return {
    getGoodsList,
  };
};

export const useOrderNum = () => {
  const setModuleRootStore = useModuleRootContext((s) => s.setModuleRootStore);
  const getOrderBadge = async (params?: object) => {
    try {
      const data = await post(
        "web/oc/contract/queryOcContractToCensus.json",
        params,
      );
      setModuleRootStore({
        _orderCount: data,
      });
    } catch (err: any) {}
  };
  return {
    getOrderBadge,
  };
};
