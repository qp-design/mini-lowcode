import {combine} from '@brushes/component-core';
import Materials from 'component-ui/components';
import {
  ButtonSettings,
  LogoWithSearchSettings,
  TableComponentSettings,
  TopComponentSettings,
  GoodNumberComponentSettings,
  UserInfoComponentSettings,
  AddCartComponentSettings,
  GoodCategoryComponentSettings,
  SwiperThumbComponentSettings,
  SkuListComponentSettings,
  CartListComponentSettings, CardComponentSettings,
  AddressItemComponentSettings
} from '@brushes/component-setting';
import {TypeComponent} from '../types';

const service : Array<TypeComponent> = [
  {
    name: '头部',
    icon: 'icon-text',
    Component: Materials['TopComponent'],
    setting: {
      props: {
        background: '#ffffff',
        padding: 0,
      },
      related: {
        settings: TopComponentSettings,
      },
    }
  },
  {
    name: 'logo和搜索',
    icon: 'icon-text',
    Component: Materials['LogoWithSearchComponent'],
    setting: {
      props: {
        background: '#ffffff',
        padding: 0,
      },
      related: {
        settings: LogoWithSearchSettings,
      },
    }
  },
  {
    name: '分类',
    icon: 'icon-text',
    Component: Materials['CategoryComponent'],
    setting: {
      props: {
        background: '#ffffff',
        padding: 0,
      },
      related: {
        settings: LogoWithSearchSettings,
      },
    }
  },
  {
    name: '用户信息',
    icon: 'icon-text',
    Component: Materials['UserInfoComponent'],
    setting: {
      props: {
        imgUrl: '',
      },
      related: {
        settings: UserInfoComponentSettings,
      },
    }
  },
  {
    name: '表格旧',
    icon: 'icon-caozuojilu',
    Component: Materials['Table2Component'],
    setting: {
      props: {
        width: '100%',
        height: 'auto',
        columns: [],
        rowKey: '',
        data: []
      },
      related: {
        settings: TableComponentSettings,
      },
    }
  },
  {
    name: '表格',
    icon: 'icon-caozuojilu',
    Component: Materials['TableComponent'],
    setting: {
      props: {
        width: '100%',
        height: 'auto',
        columns: [],
        rowKey: '',
        data: []
      },
      related: {
        settings: TableComponentSettings,
      },
    }
  },
  {
    name: '按钮',
    icon: 'icon-caozuojilu',
    Component: Materials['Button2Component'],
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
    name: '立即购买',
    icon: 'icon-caozuojilu',
    Component: Materials['BuyComponent'],
    setting: {
      props: {
        type: 'default',
        text: '立即购买',
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
    name: '商品数量',
    icon: 'icon-caozuojilu',
    Component: Materials['GoodNumberComponent'],
    setting: {
      props: {
        width: 60,
      },
      related: {
        settings: GoodNumberComponentSettings,
      },
    }
  },
  {
    name: '商品分类',
    icon: 'icon-caozuojilu',
    Component: Materials['GoodCategoryComponent'],
    setting: {
      props: {
        color: '#444',
        fontSize: 14,
        fontWeight: 400
      },
      related: {
        settings: GoodCategoryComponentSettings,
      },
    }
  },
  {
    name: '面包屑',
    icon: 'icon-caozuojilu',
    Component: Materials['BreadcrumbComponent'],
    setting: {
      props: {
        color: '#444',
        fontSize: 12,
        fontWeight: 400
      },
      related: {
        settings: GoodCategoryComponentSettings,
      },
    }
  },
  {
    name: '缩略图Banner',
    icon: 'icon-caozuojilu',
    Component: Materials['SwiperThumbComponent'],
    setting: {
      props: {
        height: 500
      },
      related: {
        settings: SwiperThumbComponentSettings,
      },
    }
  },
  {
    name: 'sku',
    icon: 'icon-caozuojilu',
    Component: Materials['SkuListComponent'],
    setting: {
      props: {
        dataKey: 'skuCode'
      },
      related: {
        settings: SkuListComponentSettings,
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
    name: '收货地址组件',
    icon: 'icon-caozuojilu',
    Component: Materials['AddressItemComponent'],
    setting: {
      props: {
        callbackName: 'addressQueryRetry',
        storeKey: 'addressStore',
        openKey: 'addressOpen',
      },
      related: {
        settings: AddressItemComponentSettings,
      },
    }
  },
]

combine(service)
export default service;
