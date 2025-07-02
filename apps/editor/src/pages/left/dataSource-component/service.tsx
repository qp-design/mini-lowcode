import {combine} from '@brushes/component-core';
import Materials from 'component-ui/components';
import {
  ButtonSettings,
  LogoWithSearchSettings,
  TopComponentSettings,
  GoodNumberComponentSettings,
  UserInfoComponentSettings,
  AddCartComponentSettings,
  GoodCategoryComponentSettings,
  SwiperThumbComponentSettings,
  SkuListComponentSettings,
  SearchComponentSettings, CategoryComponentSettings, AmountComponentSettings,
} from '@brushes/component-setting';
import {TypeComponent} from '../types';
import * as ServiceComponent from "component-ui/service";

const service : Array<TypeComponent> = [
  {
    name: '修改手机号',
    icon: 'icon-text',
    Component: ServiceComponent['GetCodeComponent'],
    setting: {
      props: {
      },
      related: {
        settings: TopComponentSettings,
      },
    }
  },
  {
    name: '合计',
    icon: 'icon-text',
    Component: ServiceComponent['AmountComponent'],
    setting: {
      props: {
        storeKey: '_skuInfo',
        fontWeight: 400,
        fontSize: 12,
        color: '#444',
        text: '默认文本',
        textAlign: 'left',
        padding: {},
        margin: {}
      },
      related: {
        settings: AmountComponentSettings,
      },
    }
  },
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
        logoWidth: 220,
        buttonWidth: 130,
      },
      related: {
        settings: LogoWithSearchSettings,
      },
    }
  },
  {
    name: '搜索',
    icon: 'icon-text',
    Component: ServiceComponent['SearchComponent'],
    setting: {
      props: {
        background: '#ffffff',
        padding: 0,
        height: 42,
        borderSize: 2,
        borderStyle: 'solid',
        borderRadius: 10,
      },
      related: {
        settings: SearchComponentSettings,
      },
    }
  },
  {
    name: '分类',
    icon: 'icon-text',
    Component: Materials['CategoryComponent'],
    setting: {
      props: {
        backgroundColor: '#F8FAFF',
        height: 420,
        width: 232,
        widthHover: 770
      },
      related: {
        settings: CategoryComponentSettings,
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
        config: [
          {
            label: "待付款",
            code: "value1",
          },
          {
            label: "待发货",
            code: "value2",
          },
          {
            label: "待收货",
            code: "value3",
          },
          {
            label: "已完成",
            code: "value4",
          },
        ],
      },
      related: {
        settings: UserInfoComponentSettings,
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
        imgHeight: 16,
        imgWidth: 16,
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
        label: '全部商品',
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
    name: '商品排序',
    icon: 'icon-caozuojilu',
    Component: Materials['SortComponent'],
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
        height: 500,
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
        dataKey: 'skuCode',
        promotionKey: 'promotionQuery',
        couponKey: 'couponQuery',
      },
      related: {
        settings: SkuListComponentSettings,
      },
    }
  },
]

combine(service)
export default service;
