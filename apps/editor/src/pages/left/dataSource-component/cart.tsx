import {combine} from '@brushes/component-core';
import Materials from 'component-ui/components';
import {
  AccountBuyComponentSettings,
  AddCartComponentSettings,
  AddressItemComponentSettings,
  ButtonSettings, CarBadgeSettings,
  CardComponentSettings,
  CartListComponentSettings,
  OrderInfoComponentSettings,
  OrderItemComponentSettings,
  PaymentServiceSettings,
  ButtonListSettings, RefundComponentSettings, PayServiceSettings
} from '@brushes/component-setting';
import {TypeComponent} from '../types';
import * as ServiceComponent from "component-ui/service";

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
    name: '订单操作按钮',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['ButtonList'],
    setting: {
      props: {
        buttonList: [{name: '查看', code: 'see'}]
      },
      related: {
        settings: ButtonListSettings,
      },
    }
  },
  {
    name: '立即购买',
    icon: 'icon-caozuojilu',
    Component: Materials['BuyComponent'],
    setting: {
      props: {
        type: 'default',
        text: '立即购买',
        car: {}
      },
      related: {
        settings: AddCartComponentSettings,
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
        car: {}
      },
      related: {
        settings: CarBadgeSettings,
      },
    }
  },
  {
    name: '添加收货地址',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['ButtonOperate'],
    setting: {
      props: {
        text: '查询',
        openKey: 'addressOpen',
        type: 'default'
      },
      related: {
        settings: ButtonSettings,
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
        hidden: false
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
    name: '立即支付',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['PayBuyComponent'],
    setting: {
      props: {
        api: 'web/oc/contract/saveContract.json',
        saveText: '立即支付',
      },
      related: {
        settings: AccountBuyComponentSettings,
      },
    }
  },
  {
    name: '提交订单',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['AccountBuyComponent'],
    setting: {
      props: {
        api: 'web/oc/contract/saveContract.json',
        saveText: '提交订单',
      },
      related: {
        settings: AccountBuyComponentSettings,
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
        margin: { marinTop: 10 },
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
