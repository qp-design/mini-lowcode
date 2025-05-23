import { createStore } from 'zustand'

export type moduleType = {
  [v: string]: any;
  _userInfo: {[v: string]: any}; // 用户信息
  _cart: number; // 购物车数据
};

export interface moduleRootStore {
  // module_id?: number;
  // current?: number;
  // hotelParams?: object;
  // extraParams?: object; //每个模块的扩展参数
  // title?: string;
  rootStore: moduleType;
}

export interface ModuleRootState extends moduleRootStore {
  setModuleRootStore: (e: Partial<moduleType>) => void;
}

export type ModuleRootStore = ReturnType<typeof createRootModuleStore>

export const createRootModuleStore = (initProps?: Partial<moduleRootStore>) => {
  const DEFAULT_PROPS: moduleRootStore = {
    rootStore: {
      _userInfo: {
      },
      _cart: 0,
    },
  }
  return createStore<ModuleRootState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setModuleRootStore: (store) =>
        set((state) => {
          return ({ rootStore: Object.assign(state.rootStore, store) })
        }),
  }))
}
