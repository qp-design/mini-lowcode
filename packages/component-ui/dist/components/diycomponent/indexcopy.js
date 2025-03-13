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
import { jsx as _jsx } from "react/jsx-runtime";
import { HOCCodeWrapComponent } from '@brushes/component-core';
import React, { useEffect, useRef } from 'react';
import { useEditor } from '@craftjs/core';
import { SlotEmpty } from './empty';
import ReactDOM from 'react-dom/client';
const DiyJsx = React.forwardRef((_a, ref) => {
    var { text } = _a, restProps = __rest(_a, ["text"]);
    const { isEnabled } = useEditor(state => ({
        isEnabled: state.options.enabled
    }));
    const app = useRef();
    const dom = useRef();
    const emptyRender = isEnabled ? _jsx(SlotEmpty, { children: '自定义组件，编写代码' }) : null;
    useEffect(() => {
    }, []);
    useEffect(() => {
        app.current = app.current || ReactDOM.createRoot(dom.current);
        const Component = restProps.children;
        if (Component) {
            app.current.render(_jsx(Component, {}));
        }
        else {
            app.current.render(emptyRender);
        }
    }, [restProps.children]);
    console.log(13, restProps);
    return (_jsx("div", { ref: ref, children: _jsx("div", { ref: dom }) }));
});
export const DiyComponent = HOCCodeWrapComponent(DiyJsx);
