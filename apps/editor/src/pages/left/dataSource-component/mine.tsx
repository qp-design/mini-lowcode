import {combine} from '@brushes/component-core';
import Materials from 'component-ui/components';
import {
  AddCartComponentSettings, AddressItemComponentSettings, DescriptionComponentSettings,
  OrderItemComponentSettings,
} from '@brushes/component-setting';
import {TypeComponent} from '../types';
import * as ServiceComponent from "component-ui/service";

const mine : Array<TypeComponent> = [
  {
    name: '左侧栏目导航',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['MenuComponent'],
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
    name: '描述列表',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['DescriptionComponent'],
    setting: {
      props: {
        listConfig: [],
        title: '订单信息',
      },
      related: {
        settings: DescriptionComponentSettings,
      },
    }
  },
  {
    name: '订单详情商品卡片',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['OrderGoodItem'],
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
        car: {}
      },
      related: {
        settings: AddCartComponentSettings,
      },
    }
  },
  {
    name: '物流轨迹',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['ExpressComponent'],
    setting: {
      props: {

      },
      related: {
        settings: OrderItemComponentSettings,
      },
    }
  },
]

combine(mine)
export default mine;
