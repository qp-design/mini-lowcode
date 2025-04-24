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
import { ApplicationContext, Container } from '@brushes/component-core';
import { Tabs } from 'antd';
import React, { useMemo } from 'react';
import { Element } from '@craftjs/core';
export const Tab = React.forwardRef((_a, ref) => {
    var { columns, tabPosition } = _a, props = __rest(_a, ["columns", "tabPosition"]);
    console.log(10, columns);
    const newColumns = useMemo(() => {
        return columns.map((item, ind) => (Object.assign(Object.assign({}, item), { children: _jsx(ApplicationContext, { children: _jsx(Element, { canvas: true, id: item.key, custom: {
                        key: ind,
                    }, is: Container }) }) })));
    }, [columns]);
    return (_jsx("div", { ref: ref, children: _jsx(Tabs, Object.assign({ tabPosition: tabPosition, items: newColumns }, props)) }));
});
