import {combine} from '@brushes/component-core';
import Materials from 'component-ui/components';
import * as BasicComponent from 'component-ui/basic';
import * as ServiceComponent from 'component-ui/service';
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
  NavigatorComponentSettings
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
    name: '文本',
    icon: 'icon-text',
    Component: BasicComponent['Text'],
    setting: {
      props: {
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
    name: 'I/O组件',
    icon: 'icon-text',
    Component: BasicComponent['ApiComponent'],
    setting: {
      props: {
        componentType: 'list',
        gap: 10,
        num: 5,
        pageSize: 10,
        defaultValue: '{}',
        dataPath: 'list',
        margin: {
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 5,
          marginRight: 5,
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
    Component: Materials['CardLRComponent'],
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
    name: '图片',
    icon: 'icon-text',
    Component: BasicComponent['ImageComponent'],
    setting: {
      props: {
        width: '100%',
        height: '100%',
        image: {
          imgUrl: "",
          link: ''
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
        destroyOnClose: true,
        code: '',
        placement: 'right'
      },
      related: {
        settings: DrawerComponentSettings,
      },
    }
  },
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
        settings: FormComponentSettings,
      },
    }
  },
  {
    name: '导航',
    icon: 'icon-text',
    Component: ServiceComponent['NavigatorComponent'],
    setting: {
      props: {
        minHeight: 20,
        flexDirection: 'row',
        background: '#fff',
        fontSize: 14,
        padding: {
          paddingLeft: 5,
          paddingTop: 5,
          paddingBottom: 5,
          paddingRight: 5
        },
        margin: {},
        list: [],
      },
      related: {
        settings: NavigatorComponentSettings,
      },
    }
  },
]

combine(basic)
export default basic;
