import {useMemo} from "react";
import { get } from "lodash";
import {useModuleContext, useModuleRootContext} from "@brushes/component-core-mini";
import { HOCCodeWrapComponent } from '@/tools';
import dayjs from 'dayjs';
import {fixPrice} from "@brushes/component-tool";
import {useComponent} from "@brushes/simulate-component-mini";

type TextProps = {
    text?: string | number;
    fontSize?:number;
    transformData?: string;
    format?:string;
    localScheme?: Array<{label: string; value: string}>;
    width?:number;
    fontWeight?: number;
    lineHeight?: string;
    minWidth?: number;
    margin?: object;
    padding?: object,
    num?: number;
    contain?:boolean;
    height?: number;
    textAlign?:string;
    className?: string;
    code?: string;
    storeKey?:string;
    module?:string;
    color?: string
}

const TextJsx: React.FC<TextProps> = ({module = 'moduleStore', ...resetProps}) => {
    if(module === 'moduleStore') {
        return <WrapText {...resetProps}/>;
    }
    return <WrapRootText {...resetProps} />;
}

const WrapRootText : React.FC<TextProps> = ({storeKey = '', ...resetProps}) => {
    const _skuInfo = useModuleRootContext(s => s.rootStore[storeKey]) || {};
    return <TextInner dataInfo={_skuInfo} {...resetProps}/>;
}

const WrapText : React.FC<TextProps> = ({storeKey = '_skuInfo', ...resetProps}) => {
    const _skuInfo = useModuleContext(s => s.moduleStore[storeKey]) || {};
    return <TextInner dataInfo={_skuInfo} {...resetProps}/>;
}

const TextInner: React.FC<TextProps & { dataInfo: object }> =
    ({
         text,
         transformData,
         format,
         localScheme,
         color,
         fontSize,
         code,
         num,
         padding = {},
         margin = {},
         contain,
         width,
         dataInfo,
         minWidth,
         className,
         ...restProps
    }) => {
    const { View } = useComponent();
    const styleParams = useMemo(() => {
        if(num === 1) {
            return {
                whiteSpace: "nowrap",
            }
        }
        return {
            whiteSpace: "pre-wrap",
            display: "-webkit-box",
            WebkitLineClamp: num,
            WebkitBoxOrient: "vertical",
        }
    }, [num]);

    const value = useMemo(() => {
        if (code) {
            const result = get(dataInfo, code);
            if(transformData === 'time') {
               return result ? dayjs(result).format(format || 'YYYY-MM-DD HH:mm:ss') : text;
            }
            if(transformData === 'format') {
                return fixPrice(+result)
            }
            if(transformData === 'dataType') {
               const v = (localScheme || []).find(({value = ''}) => value.split(',').includes(result+'')) || {label: ''};
               return v.label || text;
            }
            return result ?? text;
            // return dataInfo[code] || dataInfo[code] === 0 ? dataInfo[code] : text
        }
        return text;
    }, [text, code, dataInfo, transformData, localScheme, format]);

    return (
        <View
            className={className}
            style={{
                width,
                // ...(width ? {width} : {minWidth}),
                overflow: "hidden",
                fontSize,
                color,
                lineHeight: 1.5,
                textOverflow: "ellipsis",
                ...styleParams,
                ...restProps,
                ...padding,
                ...margin,
                // textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
            }}>{value}</View>
    )
}

// export const Text = TextJsx;

export const Text = HOCCodeWrapComponent(TextJsx);