import {Button, Image} from 'antd';
import {fullpath} from "@brushes/component-tool";
import {useModuleContext} from "@brushes/component-core";
import {useBuy} from "component-store/src/store/buy";

export const Buy = ({text, car, width, height, ...restProps}: { car: { imgUrl: string }; width: number; height: number;text: string }) => {
    const {add} = useBuy();
    const skuInfo = useModuleContext(s => s.moduleStore.skuInfo);
    const goodNum = useModuleContext(s => s.moduleStore.goodNum);
    return (
        <Button {...restProps} onClick={() => add(skuInfo.skuName, skuInfo.goodsCode, goodNum)} icon={
            car.imgUrl && <Image preview={false} src={fullpath(car.imgUrl)} width={width} height={height}/>
        }>{text}</Button>
    )
}


