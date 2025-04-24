import Left from './left'
import Right from './right'
import ContainerMonitor from './container';
import {ThemeProvider} from 'antd-style';

import {
    Container,
    ContainerWrap,
    ModuleProvider,
    OutContainer,
    SlotEmpty,
} from "@brushes/component-core";

import {
    Editor,
} from '@craftjs/core';
import * as service from "component-ui/service";
import * as basic from "component-ui/basic";
import Materials from "component-ui";
import {Card, App, Popconfirm, Spin, Checkbox, InputNumber} from "antd";
import {ReactNode} from "react";

console.log(8, basic, Materials);

const EditorMode = () => {
    return (
        <div className={'wrap'}>
            <div className={'left bg-white dark:bg-black'}><Left/></div>
            <div className={'container'}><ContainerMonitor/></div>
            <div className={'right'}><Right/></div>
        </div>
    )
}


export const WrapContainer = ({children}: { children: ReactNode }) => {
    return (
        <Editor
            resolver={{
                ...service,
                ...basic,
                ...Materials,
                Card,
                InputNumber,
                Checkbox,
                Popconfirm,
                Spin,
                OutContainer,
                SlotEmpty,
                ContainerWrap,
                Container,
            }}>
            <ModuleProvider>
                {children}
            </ModuleProvider>
        </Editor>
    )
}

const Wrap = () => {
    return (
        <App>
            <WrapContainer>
                <ThemeProvider
                    // 可以和 CP 一样直接传入 theme 对象
                    theme={{
                        token: {
                            // colorPrimary: 'green',
                        },
                    }}
                >

                    <EditorMode/>
                </ThemeProvider>
            </WrapContainer>
        </App>
    )
}

export default Wrap;
