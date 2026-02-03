export declare function useOrderResult(storeKey?: string): {
    loading: boolean;
    url: string;
    title: import("react").MutableRefObject<string>;
    open: boolean;
    onSubmit: (cb: () => void, value: any) => void;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
