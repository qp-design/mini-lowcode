import {combine} from '@brushes/component-core-mini';
import Materials from '@brushes/lowcode-component-ui';
import {
  SlotSettings,
} from '@brushes/component-setting';
import {TypeComponent} from '../types';

const commerce : Array<TypeComponent> = [
  {
    name: '自定义组件',
    icon: 'icon-caozuojilu',
    Component: Materials['SlotComponent'],
    setting: {
      props: {
      },
      related: {
        settings: SlotSettings,
      },
    }
  },
]

combine(commerce)
export default commerce;
