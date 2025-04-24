import { addCardSku } from '../../utils'
import { message } from 'antd';

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