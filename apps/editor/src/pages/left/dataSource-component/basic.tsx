import {combine} from '@brushes/component-core';
import Materials from '@brushes/lowcode-component-ui/components';
import * as BasicComponent from '@brushes/lowcode-component-ui/basic';
import * as ServiceComponent from '@brushes/lowcode-component-ui/service';
import * as Operate from '@brushes/lowcode-component-ui/operate';
import {
  ButtonSettings,
  TextCompnentSettings,
  ImageCompnentSettings,
  LinkCompnentSettings,
  ApiComponentSettings,
  BannerComponentSettings,
  TabComponentSettings,
  RichTextComponentSettings,
  CardComponentSettings,
  DrawerComponentSettings,
  FormComponentSettings,
  DividerComponentSettings,
  FormJsxComponentSettings,
  ButtonWrapSettings,
  NavigatorComponentSettings,
  DynamicComponentSettings,
  CommonListComponentSettings,
  CommonItemSettings,
  AutoTabComponentSettings,
  NumberComponentSettings, LoginComponentSettings
} from '@brushes/component-setting';
import {TypeComponent} from '../types';

const basic : Array<TypeComponent> = [
  {
    name: '轮播图',
    icon: 'icon-text',
    Component: Materials['BannerComponent'],
    setting: {
      props: {
        borderRadius: 0,
        autoplay: {dotDuration: true},
        menu: [{
          imgUrl: 'https://testtyds.obs.cn-north-4.myhuaweicloud.com:443/202410310fb5b6f8baec48b786460879a6c37606.png',
        }]
      },
      related: {
        settings: BannerComponentSettings,
      },
    }
  },
  {
    name: '登录',
    icon: 'icon-text',
    Component: Operate['LogoinComponent'],
    setting: {
      props: {
        isNeedRegister: true,
        protocol: false,
        type: 'b2b',
      },
      related: {
        settings: LoginComponentSettings,
      },
    }
  },
  {
    name: '数字组件',
    icon: 'icon-text',
    Component: ServiceComponent['NumberComponent'],
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
    name: '详情页面列表',
    icon: 'icon-text',
    Component: ServiceComponent['CommonListComponent'],
    setting: {
      props: {
        dataPath: 'list',
        padding: { paddingTop: 5, paddingBottom: 5, paddingLeft: 0, paddingRight: 0},
        storeKey: 'defaultValue',
        description: '暂无数据',
        key: '',
      },
      related: {
        settings: CommonListComponentSettings,
      },
    }
  },
  {
    name: '一行组件',
    icon: 'icon-text',
    Component: ServiceComponent['CommmonItem'],
    setting: {
      props: {
        draggable: true,
        list: [{width: 200}],
        speed: 500,
        margin: {},
        padding: { paddingTop: 5, paddingBottom: 5, paddingLeft: 0, paddingRight: 0},
      },
      related: {
        settings: CommonItemSettings,
      },
    }
  },
  {
    name: '表单控件',
    icon: 'icon-text',
    Component: Operate['DynamicFormComponent'],
    setting: {
      props: {
        fieldConfig: []
      },
      related: {
        settings: DynamicComponentSettings,
      },
    }
  },
  {
    name: '文本',
    icon: 'icon-text',
    Component: BasicComponent['Text'],
    setting: {
      props: {
        module: 'moduleStore',
        storeKey: '_skuInfo',
        // minWidth: 40,
        fontWeight: 400,
        fontSize: 12,
        num: 2,
        color: '#444',
        text: '默认文本',
        textAlign: 'left',
        padding: {},
        margin: {}
      },
      related: {
        settings: TextCompnentSettings,
      },
    }
  },
  {
    name: '超链接',
    icon: 'icon-text',
    Component: Materials['LinkComponent'],
    setting: {
      props: {
        image: { imgUrl: '', link: ''},
        text: '更多',
        fontSize: 12
      },
      related: {
        settings: LinkCompnentSettings,
      },
    }
  },
  {
    name: 'API组件',
    icon: 'icon-text',
    Component: BasicComponent['ApiComponent'],
    setting: {
      props: {
        componentType: 'list',
        gap: 10,
        num: 5,
        cacheParams: false,
        isSearch: false,
        pageSize: 5,
        defaultValue: '{}',
        dataPath: 'list',
        description: '暂无数据',
        margin: {
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 0,
          marginRight: 0,
        }
        // minHeight: 300,
      },
      related: {
        settings: ApiComponentSettings,
      },
    }
  },
  {
    name: '上下卡片',
    icon: 'icon-text',
    Component: Materials['CardComponent'],
    setting: {
      props: {
        borderRadius: 6,
        borderColor: 'rgba(0,0,0,0)',
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
    name: '左右卡片',
    icon: 'icon-text',
    Component: ServiceComponent['CardLRComponent'],
    setting: {
      props: {
        borderRadius: 6,
        borderColor: 'rgba(0,0,0,0)',
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
    name: '图片',
    icon: 'icon-text',
    Component: BasicComponent['ImageComponent'],
    setting: {
      props: {
        width: '100%',
        height: '100%',
        storeKey: '_skuInfo',
        image: {
          imgUrl: "",
          path: ''
        }
      },
      related: {
        settings: ImageCompnentSettings,
      },
    }
  },
  {
    name: '标签页',
    icon: 'icon-caozuojilu',
    Component: Materials['TabComponent'],
    setting: {
      props: {
        columns: [{
          label: '默认',
          key: 'default'
        }],
        fontSize: 14,
        tabPosition: 'top',
      },
      related: {
        settings: TabComponentSettings,
      },
    }
  },
  {
    name: '动态标签页',
    icon: 'icon-caozuojilu',
    Component: Materials['AutoTabComponent'],
    setting: {
      props: {
        columns: [{
          label: '默认',
          key: 'default',
          code: '',
        }],
        storeKey: '',
        keyName: '',
        fontSize: 14,
        tabPosition: 'top',
      },
      related: {
        settings: AutoTabComponentSettings,
      },
    }
  },
  {
    name: '富文本',
    icon: 'icon-caozuojilu',
    Component: Materials['RichTextComponent'],
    setting: {
      props: {
        columns: [{
          label: '默认',
          key: 'default'
        }],
        tabPosition: 'top',
      },
      related: {
        settings: RichTextComponentSettings,
      },
    }
  },
  {
    name: '抽屉',
    icon: 'icon-caozuojilu',
    Component: Materials['DrawerComponent'],
    setting: {
      props: {
        width: 378,
        destroyOnHidden: true,
        code: '',
        placement: 'right'
      },
      related: {
        settings: DrawerComponentSettings,
      },
    }
  },
  {
    name: '表单外层',
    icon: 'icon-caozuojilu',
    Component: BasicComponent['FormComponent'],
    setting: {
      props: {
        padding: {paddingTop: 5, paddingBottom: 5},
        formName: 'saveOrder',
        api: 'web/oc/contract/saveContract.json',
        saveText: '提交订单',
        disabled: 'preview'
      },
      related: {
        settings: FormComponentSettings,
      },
    }
  },
  {
    name: '表单',
    icon: 'icon-caozuojilu',
    Component: Materials['FormJsxComponent'],
    setting: {
      props: {
        formName: 'address',
        openKey: 'addressOpen',
        api: 'web/um/address/saveAddress.json',
        activeModule: 'address',
        saveText: '保存地址',
        type: 'default',
        callbackName: 'addressQueryRetry',
      },
      related: {
        settings: FormJsxComponentSettings,
      },
    }
  },
  {
    name: '导航',
    icon: 'icon-text',
    Component: ServiceComponent['NavigatorComponent'],
    setting: {
      props: {
        menu: [{ title: '默认导航'}],
        isNeedLine: true,
        className: 'nav',
      },
      related: {
        settings: NavigatorComponentSettings,
      },
    }
  },
  {
    name: '按钮外轮廓',
    icon: 'icon-text',
    Component: ServiceComponent['ButtonWrap'],
    setting: {
      props: {
        letterSpacing: 1,
        fontWeight: 400,
        startColor: '',
        color: '#fff',
        endColor: '',
        padding: {
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 2,
          paddingRight: 2,
        }
      },
      related: {
        settings: ButtonWrapSettings,
      },
    }
  },
  {
    name: '线条',
    icon: 'icon-text',
    Component: BasicComponent['DividerComponent'],
    setting: {
      props: {
        dashed: false,
        plain:false,
        borderWidth: 1,
        orientationMargin: 0,
        orientation: 'center',
        type: 'horizontal',
        margin: {
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0
        },
        borderColor: '#ccc'
      },
      related: {
        settings: DividerComponentSettings,
      },
    }
  },
]

combine(basic)
export default basic;
