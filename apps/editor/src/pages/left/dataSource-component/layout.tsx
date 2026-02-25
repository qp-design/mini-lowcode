import {combine, Container, IsShowContainer, OutContainer} from '@brushes/component-core-mini';
import {TypeComponent} from '../types';
import {ContainerSettings, IsShowContainerSettings, OutContainerSettings} from '@brushes/component-setting';
// import {ChildRoute} from "@brushes/hoc-component";

const layout: Array<TypeComponent> = [
  {
    name: '外容器',
    icon: 'icon-text',
    Component: OutContainer,
    isCanvas: true,
    setting: {
      props: {
        params: [],
        width: '100%',
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
  },
  // {
  //   name: '子路由模块',
  //   icon: 'icon-text',
  //   Component: ChildRoute,
  //   isCanvas: true,
  //   setting: {
  //     props: {
  //     },
  //     related: {
  //       settings: {},
  //     },
  //   }
  // },
  {
    name: '条件容器',
    icon: 'icon-text',
    Component: IsShowContainer,
    isCanvas: true,
    setting: {
      props: {
        margin: {},
        isRevert: false,
        padding: { paddingTop: 5, paddingBottom: 5 },
      },
      related: {
        settings: IsShowContainerSettings,
      },
    }
  },
]

combine(layout)

export default layout
