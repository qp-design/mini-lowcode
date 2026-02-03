export declare function useOrderPay(selfPickupKey: string): {
    onSubmit: (cb: () => void, value: any) => Promise<void>;
    loading: boolean;
};
