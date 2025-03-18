import { Image as Image2 } from 'antd';
import {fullpath} from "@brushes/component-tool";
export const Image = ({width, height, image}: { image: { imgUrl: string; link: string }; width: string | number; height: string | number}) => {
    return (
        <Image2
            preview={false}
            width={width}
            height={height}
            src={fullpath(image.imgUrl)}
        />
    )
}
