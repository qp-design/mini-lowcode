import {Image} from 'antd';
import {fullpath} from "@brushes/component-tool";
import {useAddCart} from "component-store";
import {useModuleContext} from "@brushes/component-core";
import {ButtonComponent} from "../../basic";

export const AddCart = ({car, imgWidth, imgHeight, skuId = '', ...restProps}: { skuId?: string; car: { imgUrl: string }; imgHeight: number; imgWidth: number;text: string }) => {
    const {add} = useAddCart();
    const _skuInfo = useModuleContext(s => s.moduleStore._skuInfo);
    const goodNum = useModuleContext(s => s.moduleStore.goodNum);
    return (
        <ButtonComponent {...restProps} onClick={(e:any) => add(skuId || _skuInfo!.skuId, goodNum || 1, e)} icon={
            car.imgUrl && <Image preview={false} src={fullpath(car.imgUrl)} width={imgWidth} height={imgHeight}/>
        }/>
    )
}


