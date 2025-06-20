import {InputNumber} from 'antd';
import {useModuleContext} from "@brushes/component-core";

export const GoodNumber = ({text, car, skuId = '', ...restProps}: { skuId?: string; car: { imgUrl: string }; text: string }) => {
    const _skuInfo = useModuleContext(s => s.moduleStore._skuInfo) || {};
    const goodNum = useModuleContext(s => s.moduleStore.goodNum) || _skuInfo.goodsMinnum || 1;
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    const onChange = (value: number | null) => {
        setModuleStore({
            goodNum: value || 1
        })
    }

    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <InputNumber style={{...restProps}} min={_skuInfo.goodsMinnum || 1} max={_skuInfo.goodsSupplynum} value={goodNum} onChange={onChange} changeOnWheel />
        </div>
    )
}