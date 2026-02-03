type TextProps = {
    text?: string | number;
    fontSize?: number;
    transformData?: string;
    format?: string;
    localScheme?: Array<{
        label: string;
        value: string;
    }>;
    width?: number;
    fontWeight?: number;
    lineHeight?: string;
    minWidth?: number;
    margin?: object;
    padding?: object;
    num?: number;
    contain?: boolean;
    height?: number;
    textAlign?: string;
    className?: string;
    code?: string;
    storeKey?: string;
    module?: string;
    color?: string;
};
export declare const Text: import("react").FC<TextProps>;
export {};
