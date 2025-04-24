import { Image as Image2 } from 'antd';
import {fullpath} from "@brushes/component-tool";
import {useNode} from "@craftjs/core";
import {useModuleContext} from "@brushes/component-core";
import {useMemo} from "react";
export const ImageComponent = ({ image = {}, borderRadius, height, code = '', ...restProps}: { height?: number; borderRadius?: number; code?: string; image?: { imgUrl: string; link?: string }}) => {
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
        <div style={{width: '100%', borderRadius, overflow: "hidden"}} ref={(ref: HTMLDivElement) => connect(drag(ref))}>
            <Image2
                preview={false}
                height={height}
                {...restProps}
                src={fullpath(value)}
            />
        </div>
    )
}
