//@ts-nocheck
import { post } from "@brushes/request";
import { useModuleContext } from "@brushes/component-core";
import { message } from "antd";

export const useSaveOperate = (
  url: string,
  openKey: string,
  retry: () => void,
  resetProps: object,
  preKey = "",
  storeParams = {},
  _callbackimpl: (e: any) => void,
) => {
  const setModuleStore = useModuleContext((s) => s.setModuleStore);
  const onSubmit = async (cb: () => void, value: any) => {
    try {
      const contactParams = { ...resetProps, ...storeParams, ...value };
      const params = preKey
        ? { [preKey]: JSON.stringify(contactParams) }
        : contactParams;
      const result = await post(url, params);
      message.success(result.msg);
      retry();
      setModuleStore({
        [openKey]: false,
      });
      if (_callbackimpl) {
        _callbackimpl?.(result);
      }
    } catch (err) {
    } finally {
      cb();
    }
  };

  return {
    onSubmit,
  };
};
