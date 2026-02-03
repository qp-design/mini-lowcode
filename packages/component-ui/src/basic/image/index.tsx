import {fullpath, transformImageMode} from "@brushes/component-tool";
import {useModuleContext} from "@brushes/component-core";
import {useMemo} from "react";
import {useComponent} from "@brushes/simulate-component-mini";
import { getEnv } from '@brushes/utils';

const isTaro = getEnv();


const ImageJsx = ({ image = {}, storeKey = '_skuInfo', fit = 'aspectFill', borderRadius, width, height, code = ''} :
  {
      fit?: string;
      storeKey?: string;
      width?: number;
      height?: number;
      borderRadius?: number;
      code?: string;
      image?: { imgUrl?: string; path?: string }
  }
  ) => {
    const _skuInfo = useModuleContext((s) => s.moduleStore[storeKey]);
    const { Image : Image2, View } = useComponent();
    // const { navigator } = useNavigateImpl();
    const value = useMemo(() => {
        if (code && _skuInfo) {
            // @ts-ignore
            return _skuInfo[code] || image.imgUrl;
        }
        return image?.imgUrl;
    }, [image, code, _skuInfo]);

    const imageMode = useMemo(() => {
        if(isTaro) {
            return {
                mode: fit,
            }
        }
        return {
            fit: transformImageMode(fit)
        }
    }, [isTaro, fit]);
    // {
    // ...(image.path ? { onClick: () => navigator(image.path) } : {})
    // }
    return (
        <View>
            <Image2
                width={width}
                height={height}
                {...imageMode}
                radius={borderRadius}
                src={fullpath(value)}
            />
        </View>
    )
}
export const ImageComponent = ImageJsx
