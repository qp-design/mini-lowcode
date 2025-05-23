import {post} from "@brushes/request";
import {useModuleRootContext} from "@brushes/component-core";

export const useGetCarNum = () => {
    const setModuleRootStore = useModuleRootContext(s=>s.setModuleRootStore)
    const getGoodsList = async () => {
        try {
            const data = await post('web/oc/shopping/queryShoppingGoodsByUser.json');
            setModuleRootStore({
                _cart: data.list.length ? data.list.length : 0
            });
        } catch (err: any) {
        }
    }
    return {
        getGoodsList
    }
}