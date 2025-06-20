import {Image} from 'antd';
import {fullpath} from "@brushes/component-tool";
import {useAddCart} from "component-store";
import {ButtonComponent} from "../../basic";

export const AddCart = ({car, imgWidth, imgHeight, ...restProps}: { car: { imgUrl: string }; imgHeight: number; imgWidth: number;text: string }) => {
    const {add} = useAddCart();
    return (
        <ButtonComponent {...restProps} onClick={add} icon={
            car.imgUrl && <Image preview={false} src={fullpath(car.imgUrl)} width={imgWidth} height={imgHeight}/>
        }/>
    )
}


