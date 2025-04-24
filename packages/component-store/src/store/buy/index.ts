import { checkSkuSpec } from '../../utils'
import { message } from 'antd';
import { useNavigateImpl } from "@brushes/component-tool";

export const useBuy = () => {
    const { navigator } = useNavigateImpl();
    const add = async (spec: string[], goodCode: string, goodNum: number) => {
        try {
            // const data = await checkSkuSpec([spec], goodCode);
            // message.success(data.message)
            // setTimeout(() => {
            //     navigator('/accounts?skuId=' + data.dataObj.skuId + '&goodsNum=' + goodNum);
            // }, 500)
        } catch (err: any) {
            message.error(err)
        }
    }
    return {
        add
    }
}