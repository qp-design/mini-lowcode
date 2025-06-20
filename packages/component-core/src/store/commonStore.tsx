import { createStore } from 'zustand'

export const goodListIntialValue = {
  dataPic: '',
  goodsName: '',
  goodsCamount: 0,
  skuName: '',
  pricesetNprice: 0
};

export const initialValueOrder = {
  contractSettlOpno: 0,
  rebMoney: 0,
  goodsCamount: 0,
  shoppingCountPrice: 0,
  totalDiscountPrice: 0,
  accountsSumPrice: 0,
  discount: 0,
  freight: 0,
  comDisMoney: 0,
  copyComDisMoney: 0,
  shoppingType: '',
  promotionCode: '',
  promotionCodes: ''
};

export type addressInfo = {
  freight: number;
  goodsReceiptMem: string;
  goodsReceiptPhone: string;
  goodsReceiptArrdess: string;
  areaCode:string;
}

export type moduleType = {
  [v: string]: any;
  _orderAddressInfo: addressInfo;
  _couponList: [], // 订单优惠券列表
  _selectCoupon: {}, // 选中的优惠券
  _shoppingList: [], // 订单商品信息
  _contractGoodsList: Array<typeof goodListIntialValue>; // 确认订单支付模块
  _orderDomainStr: Array<typeof initialValueOrder>; // 确认订单支付模块
  _ocContractSettlList: Array<any>; // 确认订单支付模块
  open?: boolean; //抽屉展示或掩藏
  defaultValue?: object; // 页面模块默认值
  goodNum?: number // 选择商品数量
  _skuInfo?: object // sku商品数据
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
  setModuleStore: (e: Partial<moduleType>) => void;
}

export type ModuleStore = ReturnType<typeof createModuleStore>

export const createModuleStore = (initProps?: Partial<moduleStore>) => {
  const DEFAULT_PROPS: moduleStore = {
    moduleStore: {
      _contractGoodsList: [],
      _orderDomainStr: [],
      _ocContractSettlList: [],
      _orderAddressInfo: {
        freight: 0,
        goodsReceiptMem: '',
        goodsReceiptPhone: '',
        goodsReceiptArrdess: '',
        areaCode:'',
      },
      defaultValue: void 0,
      _skuInfo: {},
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
