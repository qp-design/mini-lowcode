import {Image} from 'antd';
import {fullpath} from "@brushes/component-tool";
import {useModuleContext} from "@brushes/component-core";
import {ButtonComponent} from "../../basic";
import {useBuy} from "component-store/src/store/buy";

export const Buy = ({car, imgWidth, imgHeight, skuId = '', ...restProps}: { skuId?: string; car: { imgUrl: string }; imgHeight: number; imgWidth: number;text: string }) => {
    const {add} = useBuy();
    const _skuInfo = useModuleContext(s => s.moduleStore._skuInfo);
    const goodNum = useModuleContext(s => s.moduleStore.goodNum);
    return (
        <ButtonComponent {...restProps} onClick={() => add(skuId || _skuInfo!.skuId, goodNum || 1)} icon={
            car.imgUrl && <Image preview={false} src={fullpath(car.imgUrl)} width={imgWidth} height={imgHeight}/>
        }/>
    )
}


