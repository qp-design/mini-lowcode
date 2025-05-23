import { addCardSku } from '../../utils'
import { message } from 'antd';
import {useGetCarNum} from "../getCarNum";

export const useAddCart = () => {
    const { getGoodsList } = useGetCarNum();
    const add = async (skuId: string, count: number,e:any) => {
        console.log(8, e);
        e.stopPropagation();
        try {
            await addCardSku(skuId, count);
            await getGoodsList()
            message.success('成功添加到购物车');
        } catch (err: any) {
            message.error(err)
        }
    }
    return {
        add
    }
}