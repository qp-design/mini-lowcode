import {Button, Image} from 'antd';
import {fullpath} from "@brushes/component-tool";
import {useAddCart} from "component-store";
import {useModuleContext} from "@brushes/component-core";

export const AddCart = ({text, car, width, height, skuId = '', ...restProps}: { skuId?: string; car: { imgUrl: string }; width: number; height: number;text: string }) => {
    const {add} = useAddCart();
    const skuInfo = useModuleContext(s => s.moduleStore.skuInfo);
    const goodNum = useModuleContext(s => s.moduleStore.goodNum);
    return (
        <Button {...restProps} onClick={() => add(skuId || skuInfo!.skuId, goodNum || 1)} icon={
            car.imgUrl && <Image preview={false} src={fullpath(car.imgUrl)} width={width} height={height}/>
        }>{text}</Button>
    )
}


