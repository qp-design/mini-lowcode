import {combine} from '@brushes/component-core-mini';
import Materials from '@brushes/lowcode-component-ui/components';
import {
  AddCartComponentSettings,
  AddressItemComponentSettings,
  CarBadgeSettings,
  CardComponentSettings,
  CartListComponentSettings,
  OrderInfoComponentSettings,
  OrderItemComponentSettings,
  PaymentServiceSettings,
  RefundComponentSettings, PayServiceSettings,
  CreditComponentSettings, TimerComponentSettings, NumberComponentSettings, RefundBasicComponentSettings
} from '@brushes/component-setting';
import {TypeComponent} from '../types';
import * as ServiceComponent from "@brushes/lowcode-component-ui/service";
const cart : Array<TypeComponent> = [
  {
    name: '支付页面',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['PayServiceComponent'],
    setting: {
      props: {
        openKey: 'refundKey',
        callbackName: 'orderRetry',
      },
      related: {
        settings: PayServiceSettings,
      },
    }
  },
  {
    name: '会员权益',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['URComponent'],
    setting: {
      props: {
        precision: 2,
      },
      related: {
        settings: NumberComponentSettings,
      },
    }
  },
  {
    name: '倒计时',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['TimerComponent'],
    setting: {
      props: {
        finishKey: '',
        storeKey: 'payInfo',
        code: 'contractPaydate',
        format: 'D 天 H 时 m 分 s 秒'
      },
      related: {
        settings: TimerComponentSettings,
      },
    }
  },
  {
    name: '售后表单',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['RefundComponent'],
    setting: {
      props: {
        openKey: 'refundKey',
        callbackName: 'orderRetry',
      },
      related: {
        settings: RefundComponentSettings,
      },
    }
  },
  {
    name: '售后商品信息',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['RefundTableComponent'],
    setting: {
      props: {
        columns: [{
          title: '下单数量',
          width: 100,
          align: 'center',
          value: 'goodsCamount',
        },
          {
            title: '商品总价',
            width: 100,
            align: 'center',
            value: 'contractGoodsMoney',
          },
          {
            title: '商品单价',
            width: 100,
            align: 'center',
            value: 'pricesetNprice',
          },
          {
            title: '单位',
            width: 80,
            align: 'center',
            value: 'partsnameNumunit',
          }],
        giftSelect: false
      },
      related: {
        settings: RefundBasicComponentSettings,
      },
    }
  },
  {
    name: '收货地址组件',
    icon: 'icon-caozuojilu',
    Component: Materials['AddressCardComponent'],
    setting: {
      props: {
        borderRadius: 6,
        padding: {
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 4,
          paddingBottom: 4,
        }
      },
      related: {
        settings: CardComponentSettings,
      },
    }
  },
  {
    name: '购物车计数',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['CarBadge'],
    setting: {
      props: {
        type: 'default',
        text: '我的购物车',
        width: 130,
        height: 44,
        imgHeight: 18,
        imgWidth: 18,
        car: {},
        _tourist: false,
      },
      related: {
        settings: CarBadgeSettings,
      },
    }
  },
  {
    name: '收货地址组件',
    icon: 'icon-caozuojilu',
    Component: Materials['AddressItemComponent'],
    setting: {
      props: {
        description: '暂无收货地址',
        callbackName: 'addressQueryRetry',
        storeKey: 'addressStore',
        openKey: 'addressOpen',
        freight: true,
      },
      related: {
        settings: AddressItemComponentSettings,
      },
    }
  },
  {
    name: '加入购物车',
    icon: 'icon-caozuojilu',
    Component: Materials['AddCartComponent'],
    setting: {
      props: {
        type: 'default',
        text: '加入购物车',
        height: 16,
        width: 16,
        car: {}
      },
      related: {
        settings: AddCartComponentSettings,
      },
    }
  },
  {
    name: '购物车商品卡片',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['OrderItemComponent'],
    setting: {
      props: {
        dataPath: 'list',
        storeKey: 'defaultValue',
        callbackName: 'cartQueryRetry',
        hidden: false,
        giftHidden: true,
        description: '购物车为空'
      },
      related: {
        settings: OrderItemComponentSettings,
      },
    }
  },
  {
    name: '订单商品卡片',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['OrderItemGood'],
    setting: {
      props: {
        dataPath: 'list',
        padding: {
          paddingTop: 10,
          paddingRight: 10,
          paddingBottom: 5,
          paddingLeft: 5,
        },
        isEvalate: true,
        description: '订单数据为空',
        storeKey: 'defaultValue',
        refundKey: 'refundKey',
        expressKey: 'expressKey',
        callbackName: 'orderQueryRetry',
        borderRadius: 0
      },
      related: {
        settings: OrderItemComponentSettings,
      },
    }
  },
  {
    name: '促销信息',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['CartPromotionComponent'],
    setting: {
      props: {
        padding: {
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
        }
      },
      related: {
        settings: CartListComponentSettings,
      },
    }
  },
  {
    name: '删除购物商品组件',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['DeleteHandlerComponent'],
    setting: {
      props: {
        dataPath: 'list',
        storeKey: 'defaultValue',
        callbackName: 'cartQueryRetry'
      },
      related: {
        settings: CartListComponentSettings,
      },
    }
  },
  {
    name: '支付金额信息',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['OrderInfoComponent'],
    setting: {
      props: {
        storeKey: 'goods',
        contractType: '06'
      },
      related: {
        settings: OrderInfoComponentSettings,
      },
    }
  },
  {
    name: '支付方式',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['PaymentServiceComponent'],
    setting: {
      props: {
        padding: {paddingTop: 5, paddingLeft: 5, paddingRight: 5, paddingBottom: 5},
        margin: { marginTop: 5 },
        background: '#fff',
        storeKey: 'payMode',
        formItemCode: 'contractPmode',
        optionsKey: 'ptfpmodeType',
        optionsName: 'ptfpmodeName'
      },
      related: {
        settings: PaymentServiceSettings,
      },
    }
  },
  {
    name: '授信',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['CreditComponent'],
    setting: {
      props: {
        padding: {paddingTop: 5, paddingLeft: 5, paddingRight: 5, paddingBottom: 5},
        margin: { marginTop: 5 },
        background: '#fff',
      },
      related: {
        settings: CreditComponentSettings,
      },
    }
  },
  {
    name: '优惠券',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['CouponServiceComponent'],
    setting: {
      props: {
        padding: {paddingTop: 5, paddingLeft: 5, paddingRight: 5, paddingBottom: 5},
        margin: { marginTop: 5 },
        background: '#fff',
      },
      related: {
        settings: CreditComponentSettings,
      },
    }
  },
  {
    name: '选择框',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['OperateComponent'],
    setting: {
      props: {
        type: 'default',
        text: '加入购物车',
        height: 16,
        width: 16,
        car: {}
      },
      related: {
        settings: AddCartComponentSettings,
      },
    }
  },
  {
    name: '购物车',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['CartListComponent'],
    setting: {
      props: {
        dataPath: 'list',
        storeKey: 'defaultValue',
        description: '购物车为空',
        height: 400,
      },
      related: {
        settings: CartListComponentSettings,
      },
    }
  },
  // {
  //   name: '购物车卡片 - 0',
  //   icon: 'icon-caozuojilu',
  //   Component: ServiceComponent['NoNeedCartCommon'],
  //   setting: {
  //     props: {
  //       dataPath: '',
  //       callbackName: 'cartQueryRetry',
  //       storeKey: ''
  //     },
  //     related: {
  //       settings: CartListComponentSettings,
  //     },
  //   }
  // },
  {
    name: '购物车底部合计',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['NoNeedCartFooter'],
    setting: {
      props: {
        dataPath: 'list',
        callbackName: 'cartQueryRetry',
        storeKey: 'defaultValue'
      },
      related: {
        settings: CartListComponentSettings,
      },
    }
  },
]

combine(cart)
export default cart;
