import {
    Routes,
    Route, useNavigate,
} from "react-router-dom";
import {get, post} from '@brushes/request';
import Login from '@/views/login';
import {useModuleRootContext} from "@brushes/component-core";
import {Fragment, useEffect, useState} from "react";
import {Common} from "@brushes/editor-component";
import { AliveScope, KeepAlive } from "react-activation";
import { Button, Result } from 'antd';
import { get as getI } from 'lodash';

const ResultJsx = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="404"
            title="404"
            subTitle="对不起. 页面不存在"
            extra={<Button type="primary" onClick={() => navigate('/')}>返回首页</Button>}
        />
    )
}
const Root = () => {
    const [menu, setMenu] = useState([]);
    const [menuChild, setMenuChild] = useState([]);
    const setModuleRootStore = useModuleRootContext(s=>s.setModuleRootStore);
    useEffect(() => {
        (async ()=> {
            const {list} = await get('/web/cms/tginfoMenu/queryNewTginfoMenuTree.json');

            const {list : listConfig} = await post('/web/pfs/pfsmmodel/queryPfsMmodelPage.json')
            const {themeColor, subColor} = JSON.parse(getI(listConfig, '[0].mmodelConfig'));
            setModuleRootStore({
                _themeColor: {
                    colorBgTextHover: subColor,
                    colorPrimary:themeColor
                }
            })
            const menu = list.filter(item => item.isColumn === 1); // 一级栏目
            // 非一级栏目
            const children = (list || []).filter(item => [0, 2].includes(item.isColumn)).map(item => ({
                ...item,
                modelPcode: item.tginfoMenuPcode,
                modelName: item.tginfoMenuName,
                modelShow: ["afterSalesDetail", "orderDetail"].includes(item.menuOpcode) ? 1 : 0,
            }));

            setModuleRootStore({
                _menuChildren: children
            })
            setMenuChild(children);
            setMenu(menu)
        })()
    }, []);
    return (
        <AliveScope>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/merchantStore" element={<Common menuOpcode={'merchantStore'}/>}/>
                <Route path="/" element={<Common menuOpcode={'common'}/>}>
                    {/* 默认首页 */}
                        <Route
                            index
                            element={<KeepAlive name={'index'} id={'index'}><Common menuOpcode={'index'}/></KeepAlive>}
                        />
                        <Route
                            path="/index"
                            element={<KeepAlive name={'index'} id={'index'}><Common menuOpcode={'index'}/></KeepAlive>}
                        />
                    {/* 其他路由 */}
                    {
                        menu.map(item => (
                            <Fragment key={item.menuOpcode}>
                                { item.menuOpcode !== 'userCenter' ? <Route
                                    path={item.menuOpcode}
                                    element={<Common menuOpcode={item.menuOpcode}/>}
                                /> :
                                    <Route
                                        path={item.menuOpcode}
                                        element={<Common menuOpcode={item.menuOpcode}/>}
                                    >
                                        {/* 用户中心默认子路由 */}
                                        <Route
                                            index
                                            element={<Common menuOpcode={'orderList'}/>}
                                        />
                                        {/* 用户中心其他子路由 */}
                                        {
                                            menuChild.map(citem => {
                                                return <Route
                                                    key={citem.menuOpcode}
                                                    path={citem.menuOpcode}
                                                    element={<Common menuOpcode={citem.menuOpcode} />}/>
                                            })
                                        }
                                    </Route>
                                }
                            </Fragment>
                        ))
                    }
                    <Route path="*" element={<ResultJsx/>}/>
               </Route>
            </Routes>
        </AliveScope>
    );
};

export default Root
