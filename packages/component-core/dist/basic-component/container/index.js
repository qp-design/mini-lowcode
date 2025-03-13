var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { HOCCodeWrapComponent } from '../../tool';
import React, { useEffect } from 'react';
import { DefaultJsx } from '../default';
import { useEditor } from '@craftjs/core';
import { Provider, useStore, WrapReactQuery } from 'component-store';
const Inner = ({ children, enabled, api }) => {
    const [, setApi] = useStore(state => state['queryApi']);
    useEffect(() => {
        setApi({
            queryApi: api
        });
    }, [api]);
    console.log(322, children);
    return _jsx(_Fragment, { children: children ? children : enabled ? _jsx(DefaultJsx, {}) : '' });
};
const ContainerJsx = React.forwardRef((_a, connect) => {
    var { background, api, padding, width, children } = _a, props = __rest(_a, ["background", "api", "padding", "width", "children"]);
    const { enabled } = useEditor((state) => ({
        enabled: state.options.enabled,
    }));
    return (_jsx(WrapReactQuery, { children: _jsx(Provider, { children: _jsx("div", Object.assign({}, props, { ref: connect, style: {
                    padding: `${padding}px`,
                    background, width: `calc(${width}% - ${2 * padding}px)`
                }, children: _jsx(Inner, { enabled: enabled, api: api, children: children ? React.cloneElement(children, props) : children }) })) }) }));
});
export const Container = HOCCodeWrapComponent(ContainerJsx);
