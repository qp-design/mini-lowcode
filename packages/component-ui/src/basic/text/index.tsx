import {useNode} from "@craftjs/core";
import {useMemo} from "react";
import {useModuleContext} from "@brushes/component-core";

type TextProps = {
    text?: string;
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
    code?: string
    color?: string
}
export const Text: React.FC<TextProps> =
    ({
         fontWeight,
         text,
         color,
         fontSize,
         code,
         num,
         padding = {},
         margin = {},
         contain,
         width,
         minWidth,
         className,
         onClick,
         ...restProps
    }) => {

    const {
        connectors: {connect, drag},
    } = useNode();

    const skuInfo = useModuleContext(s => s.moduleStore.skuInfo) || {};

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
            return skuInfo[code] || text
        }
        return text;
    }, [text, code, skuInfo]);

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
                fontWeight,
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


