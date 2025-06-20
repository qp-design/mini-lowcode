import {post} from "@brushes/request";
import {useModuleContext} from "@brushes/component-core";
import {message} from "antd";

export const useSaveOperate = (url: string, openKey: string, retry: () => void, resetProps: object, preKey = '') => {
    const setModuleStore = useModuleContext(s=>s.setModuleStore);
    const onSubmit = async (cb:() => void, value: any) => {
        try {
            const contactParams = { ...value, ...resetProps};
            const params = preKey ? { [preKey]: JSON.stringify(contactParams) } : contactParams;
            const { msg } = await post(url, params);
            message.success(msg);
            retry();
            setModuleStore({
                [openKey]: false
            })
        } catch (err) {

        } finally {
            cb();
        }
    }

    return {
        onSubmit
    }
}