import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro';
import {ModuleRootProvider} from "@brushes/component-core-mini";
import { wxEngine } from "@brushes/request";

// 在 app.js 中使用
import { initCryptoPolyfill } from './polyfill';

import './app.scss'

initCryptoPolyfill();
wxEngine()


function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <ModuleRootProvider>
        {children}
    </ModuleRootProvider>
  )
}



export default App
