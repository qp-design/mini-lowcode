import Left from './left'
import Right from './right'
import ContainerMonitor from './container';
import * as Materials from 'component-ui';
import { Container, LayoutComponent, SlotEmpty } from '@brushes/component-core';
import {
  Editor,
} from '@craftjs/core'

const EditorMode = () => {
  return (
    <div className={'wrap'}>
      <div className={'left bg-white dark:bg-black'}><Left/></div>
      <div className={'container'}><ContainerMonitor/></div>
      <div className={'right'}><Right/></div>
    </div>
  )
}
console.log(19, Materials);
const Wrap = () => {
  return (
    <Editor
      resolver={{
        ...Materials,
        SlotEmpty,
        LayoutComponent,
        Container,
      }}>
      <EditorMode/>
    </Editor>
  )
}

export default Wrap;
