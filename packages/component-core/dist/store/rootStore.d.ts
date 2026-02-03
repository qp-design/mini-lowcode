export type moduleType = {
    [v: string]: any;
    _historyList: Array<any>;
    _themeColor: {
        colorPrimary: string;
        colorBgTextHover: string;
    };
    _orderCount: {
        [v: string]: string | number;
    };
    _userInfo: {
        [v: string]: any;
    };
    _cart: number;
};
export interface moduleRootStore {
    rootStore: moduleType;
}
export interface ModuleRootState extends moduleRootStore {
    setModuleRootStore: (e: Partial<moduleType>) => void;
}
export type ModuleRootStore = ReturnType<typeof createRootModuleStore>;
export declare const createRootModuleStore: (initProps?: Partial<moduleRootStore>) => Omit<import("zustand").StoreApi<ModuleRootState>, "setState" | "persist"> & {
    setState(partial: ModuleRootState | Partial<ModuleRootState> | ((state: ModuleRootState) => ModuleRootState | Partial<ModuleRootState>), replace?: false | undefined): unknown;
    setState(state: ModuleRootState | ((state: ModuleRootState) => ModuleRootState), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<ModuleRootState, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: ModuleRootState) => void) => () => void;
        onFinishHydration: (fn: (state: ModuleRootState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<ModuleRootState, unknown, unknown>>;
    };
};
