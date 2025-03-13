import {combine, LayoutComponent} from '@brushes/component-core';
import {TypeComponent} from '../types';
import {LayoutSettings} from '@brushes/component-setting';

const layout: Array<TypeComponent> = [
  {
    name: '容器',
    icon: 'icon-text',
    Component: LayoutComponent,
    isCanvas: true,
    setting: {
      props: {
        api: '',
        grid:2,
        padding: 5,
        background: '#efefef'
      },
      related: {
        settings: LayoutSettings,
      },
    }
  }
]

combine(layout)

export default layout
