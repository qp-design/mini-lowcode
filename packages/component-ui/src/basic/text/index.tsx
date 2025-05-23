import {useNode} from "@craftjs/core";
import {useMemo} from "react";
import {useModuleContext, useModuleRootContext} from "@brushes/component-core";

type TextProps = {
    text?: string | number;
    fontSize?:number;
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
    onClick?:()=> void;
    code?: string;
    storeKey?:string;
    module?:string;
    color?: string
}
export const Text: React.FC<TextProps> = ({module, ...resetProps}) => {
    if(module === 'moduleStore') {
        return <WrapText {...resetProps}/>;
    }
    return <WrapRootText {...resetProps} />;
}

const WrapRootText : React.FC<TextProps> = ({storeKey = '', ...resetProps}) => {
    const _skuInfo = useModuleRootContext(s => s.rootStore[storeKey]) || {};
    return <TextInner dataInfo={_skuInfo} {...resetProps}/>;
}

const WrapText : React.FC<TextProps> = ({storeKey = '', ...resetProps}) => {
    const _skuInfo = useModuleContext(s => s.moduleStore[storeKey]) || {};
    return <TextInner dataInfo={_skuInfo} {...resetProps}/>;
}

const TextInner: React.FC<TextProps & { dataInfo: object }> =
    ({
         text,
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
         onClick,
         ...restProps
    }) => {

    const {
        connectors: {connect, drag},
    } = useNode();

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
            // @ts-ignore
            return dataInfo[code] || text
        }
        return text;
    }, [text, code, dataInfo]);

    return (
        <div
            onClick={onClick}
            className={className}
            ref={(ref: HTMLDivElement) => connect(drag(ref))}
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
            }}>{value}</div>
    )
}


