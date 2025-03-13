import {combine} from '@brushes/component-core';
import * as Materials from 'component-ui';
import {
  ButtonSettings,
  FormComponentSettings,
  // InnerFormSettings,
  TableComponentSettings,
  TabSettings
} from '@brushes/component-setting';
import {TypeComponent} from '../types';

const basic : Array<TypeComponent> = [
  {
    name: '表单',
    icon: 'icon-text',
    Component: Materials['FormComponent'],
    setting: {
      props: {
        background: '#ffffff',
        padding: 0,
        grid: 3,
        layout: 'inline',
        activeModule: '',
        formConfig: [],
      },
      related: {
        settings: FormComponentSettings,
      },
    }
  },
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
    Component: Materials['TableComponent'],
    setting: {
      props: {
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
    Component: Materials['ButtonComponent'],
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
    name: '标签页',
    icon: 'icon-caozuojilu',
    Component: Materials['TabComponent'],
    setting: {
      props: {
        columns: [{
          label: '默认',
          key: 'default'
        }],
        tabPosition: 'top',
      },
      related: {
        settings: TabSettings,
      },
    }
  },
]

combine(basic)
export default basic;
