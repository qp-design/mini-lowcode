import { createStore } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type moduleType = {
  [v: string]: any;
  _historyList: Array<any>;
  _themeColor: { colorPrimary: string; colorBgTextHover: string };
  _orderCount: {[v: string]: string | number}; // 订单角标
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
      _historyList: [],
      _themeColor: { colorPrimary: '#1677ff', colorBgTextHover: '#e6r4ff' },
      _orderCount: {},
      _cart: 0,
      _webStore: {},
      _menuChildren: []
    },
  }
  return createStore<ModuleRootState>()(persist((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setModuleRootStore: (store) =>
        set((state) => {
          return ({ rootStore: Object.assign(state.rootStore, store) })
        }),
  }),
      {
        name: 'root-storage', // 存储的 key 名
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  }))
}
