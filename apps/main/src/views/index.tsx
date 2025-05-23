import {
    Routes,
    Route,
} from "react-router-dom";
import {get} from '@brushes/request';
import Login from '@/views/login';
import {ModuleRootProvider} from "@brushes/component-core";
import {Fragment, useEffect, useState} from "react";
import {Common, Layout} from "@brushes/editor-component";

const Root = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        (async ()=> {
            const {list} = await get('/web/cms/tginfoMenu/queryNewTginfoMenuTree.json');
            // console.log(25, data);
            const menu = list.filter(item => item.isColumn === 1);
            console.log(27, menu);
            setMenu(menu)
        })()
    }, []);

    return (
        <ModuleRootProvider>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Common menuOpcode={'common'}/>}>
                    {/* 子路由 */}
                    {
                        menu.map(item => (
                            <Fragment key={item.menuOpcode}>
                                <Route
                                    path={item.menuOpcode}
                                    element={<Common menuOpcode={item.menuOpcode}/>}
                                />
                            </Fragment>
                        ))
                    }
                    {/*<Route index element={<Common menuOpcode={'index'}/>} />*/}
                    {/*<Route path={'index'} element={<Common menuOpcode={'index'}/>} />*/}
                    {/*<Route path="/car" element={<Car/>} />*/}
                    {/*<Route path="/goodList" element={<GoodList/>} />*/}
                    {/*<Route path="/account" element={<Account/>} />*/}
                    {/*<Route path="/result" element={<Result/>} />*/}
                    {/*<Route path="/goodDetail" element={<GoodDetail/>} />*/}
                    {/*<Route path="/user" element={<User/>}>*/}
                    {/*    /!* 更深层次的子路由 *!/*/}
                    {/*    <Route path="order" element={<Order />} />*/}
                    {/*    <Route path="orderDetail" element={<OrderDetail/>} />*/}
                    {/*</Route>*/}
               </Route>
            </Routes>
        </ModuleRootProvider>
    );
};

export default Root
