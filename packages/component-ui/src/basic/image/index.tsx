import { Image as Image2 } from 'antd';
import {fullpath, useNavigateImpl} from "@brushes/component-tool";
import {useNode} from "@craftjs/core";
import {useModuleContext} from "@brushes/component-core";
import {useMemo} from "react";
export const ImageComponent = ({ image = {}, borderRadius, width, code = '', ...restProps}: { width?: number; height?: number; borderRadius?: number; code?: string; image?: { imgUrl: string; path?: string }}) => {
    const {
        connectors: {connect, drag},
    } = useNode();
    const _skuInfo = useModuleContext((s) => s.moduleStore._skuInfo);
    const { navigator } = useNavigateImpl();
    const value = useMemo(() => {
        if (code) {
            // @ts-ignore
            return _skuInfo[code];
        }
        return image.imgUrl;
    }, [image, code, _skuInfo]);

    return (
        <div style={{width, borderRadius, overflow: "hidden"}} ref={(ref: HTMLDivElement) => connect(drag(ref))}>
            <Image2
                {
                    ...(image.path ? { onClick: () => navigator(image.path) } : {})
                }
                style={{cursor: image.path ? 'pointer' : ''}}
                width={width}
                preview={false}
                {...restProps}
                src={fullpath(value)}
            />
        </div>
    )
}
