import { Outlet } from 'react-router-dom';
import {HOCCodeWrapComponent} from "@brushes/component-core";

const Layout = () => {
    return (
        <Outlet/>
    )
}

export const ChildRoute = HOCCodeWrapComponent(Layout)