export declare const formatList: {
    file: (name: string, url?: string) => {
        from: string;
        to: string;
        format: (preValue?: never[]) => Promise<any>;
    };
    basic: (name: string, url?: string) => {
        from: string;
        to: string;
        format: (preValue: any) => Promise<any>;
    };
};
export declare const transform: () => never[];
