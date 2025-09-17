import {combine} from '@brushes/component-core';
import * as Operate from 'component-ui/operate';

import {TypeComponent} from '../types';
import {
  AccountBuyComponentSettings,
  ButtonListSettings,
  ButtonSettings,
  SaveOperateComponentSettings,
  DiyActionSettings,
  AddCartComponentSettings,
  QueryOperateComponentSettings, ButtonOperateSettings, PayBuyComponentSettings
} from "@brushes/component-setting";
import * as ServiceComponent from "component-ui/service";
import * as BasicComponent from "component-ui/basic";


const basic : Array<TypeComponent> = [
  {
    name: '按钮',
    icon: 'icon-caozuojilu',
    Component: BasicComponent['ButtonComponent'],
    setting: {
      props: {
        text: '查询',
        type: 'default'
      },
      related: {
        settings: ButtonSettings,
      },
    }
  },
  {
    name: '退出',
    icon: 'icon-text',
    Component: Operate['LogoutComponent'],
    setting: {
      props: {
        fontSize: 12,
        padding: { paddingLeft: 0, paddingRight: 0},
        text: '退出',
        type: "link",
        defaultValue: '登录'
      },
      related: {
        settings: ButtonSettings,
      },
    }
  },
  {
    name: '查询',
    icon: 'icon-caozuojilu',
    Component: Operate['QueryOperateComponent'],
    setting: {
      props: {
        text: '查询',
        width: 180,
        height: 46,
        type: 'primary',
      },
      related: {
        settings: QueryOperateComponentSettings,
      },
    }
  },
  {
    name: '自定义按钮',
    icon: 'icon-text',
    Component: Operate['DiyActionComponent'],
    setting: {
      props: {
        title: '',
        api: '',
        callbackName: '',
        fontSize: '12px',
        paramKey: '',
        value: '',
        storeKey: '_skuInfo'
      },
      related: {
        settings: DiyActionSettings,
      },
    }
  },
  {
    name: '按钮组',
    icon: 'icon-text',
    Component: Operate['ButtonList'],
    setting: {
      props: {
        buttonList: [{type: 'link', name: '查看', idKey: 'dataState'}],
        align: 'baseline',
        storeKey: '_skuInfo',
        padding: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 5,
          paddingTop: 5,
        },
        direction: 'vertical'
      },
      related: {
        settings: ButtonListSettings,
      },
    }
  },
  {
    name: '打开弹出按钮',
    icon: 'icon-caozuojilu',
    Component: ServiceComponent['ButtonOperate'],
    setting: {
      props: {
        text: '查询',
        openKey: 'addressOpen',
        type: 'default',
        car: {}
      },
      related: {
        settings: ButtonOperateSettings,
      },
    }
  },
  {
    name: '保存',
    icon: 'icon-caozuojilu',
    Component: Operate['SaveOperateComponent'],
    setting: {
      props: {
        api: 'web/oc/contract/saveContract.json',
        text: '保存',
        retryKey: 'retry',
        width: 180,
        height: 46,
        type: 'primary',
        preKey: ''
      },
      related: {
        settings: SaveOperateComponentSettings,
      },
    }
  },
  {
    name: '立即支付',
    icon: 'icon-caozuojilu',
    Component: Operate['PayBuyComponent'],
    setting: {
      props: {
        api: 'web/oc/contract/saveContract.json',
        saveText: '立即支付',
        storeKey: 'payInfo'
      },
      related: {
        settings: PayBuyComponentSettings,
      },
    }
  },
  {
    name: '立即购买',
    icon: 'icon-caozuojilu',
    Component: Operate['BuyComponent'],
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
    name: '提交订单',
    icon: 'icon-caozuojilu',
    Component: Operate['AccountBuyComponent'],
    setting: {
      props: {
        selfPickupKey: 'selfPickup',
        api: 'web/oc/contract/saveContract.json',
        saveText: '提交订单',
      },
      related: {
        settings: AccountBuyComponentSettings,
      },
    }
  },
]

combine(basic)
export default basic;
