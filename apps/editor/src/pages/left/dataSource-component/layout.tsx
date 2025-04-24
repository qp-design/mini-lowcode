import {combine, Container, OutContainer} from '@brushes/component-core';
import {TypeComponent} from '../types';
import {ContainerSettings, OutContainerSettings} from '@brushes/component-setting';

const layout: Array<TypeComponent> = [
  {
    name: '外容器',
    icon: 'icon-text',
    Component: OutContainer,
    isCanvas: true,
    setting: {
      props: {
        params: [],
        width: 1200,
        height: 'auto',
        backgroundImage: '',
        background: 'rgba(255,255,255,0)',
        flexDirection: 'column'
      },
      related: {
        settings: OutContainerSettings,
      },
    }
  },
  {
    name: '容器',
    icon: 'icon-text',
    Component: Container,
    isCanvas: true,
    setting: {
      props: {
        width: '100%',
        margin: {},
        padding: {},
        positionValue: {},
        height: 'auto',
        backgroundImage: '',
        background: 'rgba(255,255,255,0)',
        flexDirection: 'column'
      },
      related: {
        settings: ContainerSettings,
      },
    }
  }
]

combine(layout)

export default layout
