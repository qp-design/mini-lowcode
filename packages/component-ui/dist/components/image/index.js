import { jsx as _jsx } from "react/jsx-runtime";
import { Image as Image2 } from 'antd';
import { fullpath } from "@brushes/component-tool";
export const Image = ({ width, height, image }) => {
    return (_jsx(Image2, { preview: false, width: width, height: height, src: fullpath(image.imgUrl) }));
};
