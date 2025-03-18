import {combine, Container} from '@brushes/component-core';
import {TypeComponent} from '../types';
import {ContainerSettings} from '@brushes/component-setting';

const layout: Array<TypeComponent> = [
  {
    name: '容器',
    icon: 'icon-text',
    Component: Container,
    isCanvas: true,
    setting: {
      props: {
        width: '100%',
        margin: 'auto',
        marginBottom: 0,
        marginTop: 0,
        height: 'auto',
        backgroundImage: '',
        background: '#fff',
        flexDirection: 'row'
      },
      related: {
        settings: ContainerSettings,
      },
    }
  }
]

combine(layout)

export default layout
