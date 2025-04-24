import {InputNumber} from 'antd';
import {useModuleContext} from "@brushes/component-core";

export const GoodNumber = ({text, car, skuId = '', ...restProps}: { skuId?: string; car: { imgUrl: string }; text: string }) => {
    const goodNum = useModuleContext(s => s.moduleStore.goodNum) || 1
    const skuInfo = useModuleContext(s => s.moduleStore.skuInfo) || {}
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    // const goodNum = useModuleContext(s => s.goodNum);
    // const setGoodNum = useModuleContext(s => s.setGoodNum);
    const onChange = (value: number | null) => {
        // setGoodNum(value || 1);
        setModuleStore({
            goodNum: value || 1
        })
    }
    return (
        <InputNumber style={{...restProps}} min={skuInfo.goodsMinnum || 1} max={skuInfo.goodsSupplynum} value={goodNum} onChange={onChange} changeOnWheel />
    )
}