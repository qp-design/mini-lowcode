import {Image} from 'antd';
import {fullpath} from "@brushes/component-tool";
import {HOCCodeWrapComponent} from "@brushes/component-core";
import {ButtonComponent} from "../../basic";
import {useBuy} from "component-store/src/store/buy";

const Buy = ({car, imgWidth, imgHeight, skuId = '', ...restProps}: { skuId?: string; car: { imgUrl: string }; imgHeight: number; imgWidth: number;text: string }) => {
    const {add} = useBuy();
    return (
        <ButtonComponent {...restProps} onClick={add} icon={
            car.imgUrl && <Image preview={false} src={fullpath(car.imgUrl)} width={imgWidth} height={imgHeight}/>
        }/>
    )
}

export const BuyComponent = HOCCodeWrapComponent(Buy);