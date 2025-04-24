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
import React from 'react';
import { Element } from '@craftjs/core';
import { SlotComponent } from '../slot';
const DiyJsx = React.forwardRef((_a, ref) => {
    var { text, children } = _a, restProps = __rest(_a, ["text", "children"]);
    return (_jsx("div", { ref: ref, children: _jsx(Element, { id: 'diyComponent', is: SlotComponent, canvas: true }) }));
});
export const DiyComponent = HOCCodeWrapComponent(DiyJsx);
