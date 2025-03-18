import {combine} from '@brushes/component-core';
import Materials from 'component-ui';
import {
  ButtonSettings,
  FormComponentSettings,
  TextCompnentSettings,
  LogoWithSearchSettings,
  // InnerFormSettings,
  TableComponentSettings,
  TabSettings,
  TopComponentSettings,
  ImageCompnentSettings,
  CardListCompnentSettings,
  LinkCompnentSettings,
  BannerComponentSettings,
  UserInfoComponentSettings
} from '@brushes/component-setting';
import {TypeComponent} from '../types';

const basic : Array<TypeComponent> = [
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
    name: '文本',
    icon: 'icon-text',
    Component: Materials['TextComponent'],
    setting: {
      props: {
        fontWeight: 400,
        fontSize: 16,
        color: '#444',
        text: '默认文本',
        textAlign: 'left'
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
    name: '卡片列表',
    icon: 'icon-text',
    Component: Materials['CardListComponent'],
    setting: {
      props: {
        gap: 20,
        num: 4,
      },
      related: {
        settings: CardListCompnentSettings,
      },
    }
  },
  {
    name: '图片',
    icon: 'icon-text',
    Component: Materials['ImageComponent'],
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
  // {
  //   name: '表单',
  //   icon: 'icon-text',
  //   Component: Materials['FormComponent'],
  //   setting: {
  //     props: {
  //       background: '#ffffff',
  //       padding: 0,
  //       grid: 3,
  //       layout: 'inline',
  //       activeModule: '',
  //       formConfig: [],
  //     },
  //     related: {
  //       settings: FormComponentSettings,
  //     },
  //   }
  // },
  // {
  //   name: '表单控件',
  //   icon: 'icon-text',
  //   Component: Materials['InnerFormComponent'],
  //   setting: {
  //     props: {
  //       formConfig: [],
  //     },
  //     related: {
  //       settings: InnerFormSettings,
  //     },
  //   }
  // },
  {
    name: '表格',
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
  // {
  //   name: '标签页',
  //   icon: 'icon-caozuojilu',
  //   Component: Materials['TabComponent'],
  //   setting: {
  //     props: {
  //       columns: [{
  //         label: '默认',
  //         key: 'default'
  //       }],
  //       tabPosition: 'top',
  //     },
  //     related: {
  //       settings: TabSettings,
  //     },
  //   }
  // },
]

combine(basic)
export default basic;
