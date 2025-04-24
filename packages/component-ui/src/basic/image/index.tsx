import { Image as Image2 } from 'antd';
import {fullpath} from "@brushes/component-tool";
import {useNode} from "@craftjs/core";
import {useModuleContext} from "@brushes/component-core";
import {useMemo} from "react";
export const ImageComponent = ({ image = {}, borderRadius, width, code = '', ...restProps}: { width?: number; height?: number; borderRadius?: number; code?: string; image?: { imgUrl: string; link?: string }}) => {
    const {
        connectors: {connect, drag},
    } = useNode();
    const skuInfo = useModuleContext((s) => s.moduleStore.skuInfo);

    const value = useMemo(() => {
        if (code) {
            // @ts-ignore
            return skuInfo[code];
        }
        return image.imgUrl;
    }, [image, code, skuInfo]);

    return (
        <div style={{width, borderRadius, overflow: "hidden"}} ref={(ref: HTMLDivElement) => connect(drag(ref))}>
            <Image2
                width={width}
                preview={false}
                {...restProps}
                src={fullpath(value)}
            />
        </div>
    )
}
