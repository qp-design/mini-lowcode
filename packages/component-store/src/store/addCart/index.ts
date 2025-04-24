import { addCardSku } from '../../utils'
import { message } from 'antd';
import {useModuleContext} from "@brushes/component-core";
import {useMemo} from "react";
import {get} from "lodash-es";

export const useCartListData = (dataPath: string, storeKey: string) => {
    const value = useModuleContext(s => s.moduleStore[storeKey]);
    return useMemo(() => {
        let res = [];
        if (dataPath) {
            res = get(value, dataPath, []);
        } else {
            res = value
        }
        if (Array.isArray(res)) {
            return res
        } else {
            return []
        }
    }, [value, dataPath]);
}

export const useAddCart = () => {
    const add = async (skuId: string, count: number) => {
        try {
            await addCardSku(skuId, count);
            message.success('成功添加到购物车')
        } catch (err: any) {
            message.error(err)
        }
    }
    return {
        add
    }
}