import Left from './left'
import Right from './right'
import ContainerMonitor from './container';
import {ThemeProvider} from 'antd-style';
import {
    ModuleRootProvider,
} from "@brushes/component-core";

import { App} from "antd";
import {Common, WrapContainer} from '@brushes/editor-component';
import {Fragment, useEffect, useState} from "react";
import {get} from "@brushes/request";
import {Route, Routes} from "react-router-dom";
import {InnerApp} from "@/pages/container/monitor";

const EditorMode = () => {
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
        <App>
            <ModuleRootProvider>
                <WrapContainer enabled={true}>
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
            </ModuleRootProvider>
        </App>
    )
}

const Root = () => {
    return (
        <ModuleRootProvider>
            <WrapContainer enabled={true}>

            {/*<Routes>*/}
            {/*    <Route path="/" element={<Wrap/>}>*/}
            {/*        <Route index element={<InnerApp/>}/>*/}
            {/*        <Route path={'index'} element={<InnerApp/>}/>*/}
            {/*    </Route>*/}
            {/*    /!*<Route path="/" element={<Common menuOpcode={'common'}/>}>*!/*/}
            {/*    /!*    /!* 子路由 *!/*!/*/}
            {/*    /!*    {*!/*/}
            {/*    /!*        menu.map(item => (*!/*/}
            {/*    /!*            <Fragment key={item.menuOpcode}>*!/*/}
            {/*    /!*                <Route*!/*/}
            {/*    /!*                    path={item.menuOpcode}*!/*/}
            {/*    /!*                    element={<Common menuOpcode={item.menuOpcode}/>}*!/*/}
            {/*    /!*                />*!/*/}
            {/*    /!*            </Fragment>*!/*/}
            {/*    /!*        ))*!/*/}
            {/*    /!*    }*!/*/}
            {/*    /!*    /!*<Route index element={<Common menuOpcode={'index'}/>} />*!/*!/*/}
            {/*    /!*    /!*<Route path={'index'} element={<Common menuOpcode={'index'}/>} />*!/*!/*/}
            {/*    /!*    /!*<Route path="/car" element={<Car/>} />*!/*!/*/}
            {/*    /!*    /!*<Route path="/goodList" element={<GoodList/>} />*!/*!/*/}
            {/*    /!*    /!*<Route path="/account" element={<Account/>} />*!/*!/*/}
            {/*    /!*    /!*<Route path="/result" element={<Result/>} />*!/*!/*/}
            {/*    /!*    /!*<Route path="/goodDetail" element={<GoodDetail/>} />*!/*!/*/}
            {/*    /!*    /!*<Route path="/user" element={<User/>}>*!/*!/*/}
            {/*    /!*    /!*    /!* 更深层次的子路由 *!/*!/*!/*/}
            {/*    /!*    /!*    <Route path="order" element={<Order />} />*!/*!/*/}
            {/*    /!*    /!*    <Route path="orderDetail" element={<OrderDetail/>} />*!/*!/*/}
            {/*    /!*    /!*</Route>*!/*!/*/}
            {/*    /!*</Route>*!/*/}
            {/*</Routes>*/}
            </WrapContainer>
        </ModuleRootProvider>
    );
};

export default Wrap;
