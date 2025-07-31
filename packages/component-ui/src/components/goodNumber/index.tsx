import {InputNumber} from 'antd';
import {useModuleContext} from "@brushes/component-core";
import {useEffect, useMemo} from "react";
import {get} from "lodash";

export const GoodNumber = ({ text, saveStoreKey='goodNum', storeKey='_skuInfo', stepKey = '', min='goodsMinnum', max='goodsSupplynum', ...restProps} :
                               { min?: string; stepKey?: string; saveStoreKey?:string;  max?: string; storeKey?: string; text: string }) => {
    const _skuInfo = useModuleContext(s => s.moduleStore[storeKey]) || {};

    const step = useMemo(() => {
        if(stepKey) {
            return get(_skuInfo, stepKey, 1);
        }
        return 1
    }, [_skuInfo, stepKey]);

    const goodNum = useModuleContext(s => s.moduleStore[saveStoreKey]) || _skuInfo[min] || 1;

    useEffect(() => {
        setModuleStore({
            [saveStoreKey]: _skuInfo[min]
        })
    }, [_skuInfo[min]]);

    const setModuleStore = useModuleContext(s => s.setModuleStore);

    const onChange = (value: number | null) => {
        if (!value) return;
        // 确保值是 step 的整数倍
        const roundedValue = Math.round(value / step) * step;
        setModuleStore({
            [saveStoreKey]: roundedValue || 1
        })
    }

    return (
        <div onClick={(e)=> e.stopPropagation()}>
            <InputNumber
                step={step}
                style={{...restProps}}
                min={_skuInfo[min] || 1}
                max={_skuInfo[max]}
                value={goodNum}
                onChange={onChange}
                changeOnWheel
            />
        </div>
    )
}