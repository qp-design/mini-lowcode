import {combine} from '@brushes/component-core';
import Materials from 'component-ui/components';
import {
  AddCartComponentSettings,
  CartListComponentSettings,
} from '@brushes/component-setting';
import {TypeComponent} from '../types';
import * as ServiceComponent from "component-ui/service";

const cart : Array<TypeComponent> = [
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
    name: '商品卡片',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['OrderItemComponent'],
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
    Component: Materials['CartListComponent'],
    setting: {
      props: {
        dataPath: 'list',
        storeKey: 'defaultValue'
      },
      related: {
        settings: CartListComponentSettings,
      },
    }
  },
  {
    name: '购物车卡片',
    icon: 'icon-caozuojilu',
    Component: Materials['NoNeedCartCommon'],
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
  {
    name: '购物车底部合计',
    icon: 'icon-caozuojilu',
    Component: Materials['NoNeedCartFooter'],
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
