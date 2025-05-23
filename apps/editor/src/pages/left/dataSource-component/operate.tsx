import {combine} from '@brushes/component-core';
import * as Operate from 'component-ui/operate';

import {TypeComponent} from '../types';
import {ButtonSettings} from "@brushes/component-setting";


const basic : Array<TypeComponent> = [
  {
    name: '退出',
    icon: 'icon-text',
    Component: Operate['LogoutComponent'],
    setting: {
      props: {
        fontSize: 12,
        padding: { paddingLeft: 0, paddingRight: 0},
        text: '退出',
        type: "link"
      },
      related: {
        settings: ButtonSettings,
      },
    }
  },
]

combine(basic)
export default basic;
