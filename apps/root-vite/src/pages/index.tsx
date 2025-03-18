import Left from './left'
import Right from './right'
import ContainerMonitor from './container';
import { ThemeProvider } from 'antd-style';

import Materials from 'component-ui';
import {Container, ContainerWrap, SlotEmpty} from '@brushes/component-core';
import {
    Editor, useEditor,
} from '@craftjs/core'

const EditorMode = () => {
    const {enabled} = useEditor(
        (state) => ({
            enabled: state.options.enabled,
        }));
    if(!enabled) {
        return <ContainerMonitor/>;
    }
  return (
    <div className={'wrap'}>
      <div className={'left bg-white dark:bg-black'}><Left/></div>
       <div className={'container'}><ContainerMonitor/></div>
      <div className={'right'}><Right/></div>
    </div>
  )
}
const Wrap = () => {
  return (
      <ThemeProvider
          // 可以和 CP 一样直接传入 theme 对象
          theme={{
              token: {
                  // colorPrimary: 'green',
              },
          }}
      >

    <Editor
      resolver={{
        ...Materials,
        SlotEmpty,
        ContainerWrap,
        Container,
      }}>
      <EditorMode/>
    </Editor>
      </ThemeProvider>
  )
}

export default Wrap;
