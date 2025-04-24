import { createStore } from 'zustand'

type moduleType = {
  [v: string]: any;
  open?: boolean; //抽屉展示或掩藏
  defaultValue?: object; // 页面模块默认值
  goodNum?: number // 选择商品数量
  skuInfo?: object // sku商品数据
  params?: object; //每个模块的请求参数
  breadList?: []; //面包屑
};

export interface moduleStore {
  // module_id?: number;
  // current?: number;
  // hotelParams?: object;
  // extraParams?: object; //每个模块的扩展参数
  // title?: string;
  moduleStore: moduleType;
}

export interface ModuleState extends moduleStore {
  setModuleStore: (e: moduleType) => void;
}

export type ModuleStore = ReturnType<typeof createModuleStore>

export const createModuleStore = (initProps?: Partial<moduleStore>) => {
  const DEFAULT_PROPS: moduleStore = {
    moduleStore: {
      defaultValue: void 0,
      goodNum: 1,
      skuInfo: {},
      params: {},
      breadList: [],
      open: false
    },
  }
  return createStore<ModuleState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setModuleStore: (store) =>
        set((state) => {
          return ({ moduleStore: Object.assign(state.moduleStore, store) })
        }),
  }))
}
