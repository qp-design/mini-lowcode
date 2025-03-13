import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-nocheck
import { Element, useEditor } from '@craftjs/core';
import { HOCCodeWrapComponent } from '../../tool';
import { Container } from '../container';
import React from 'react';
import { DefaultEditorBg } from '../default';
const LayoutJsx = React.forwardRef(({ grid, background, padding }, ref) => {
    const { isEnabled } = useEditor(state => ({
        isEnabled: state.options.enabled
    }));
    return (_jsxs("div", { ref: ref, children: [isEnabled && React.createElement(DefaultEditorBg), _jsx("div", { style: { background }, className: 'grid-wrap', children: Array(grid).fill(0).map((item, index) => (_jsx(Element, { canvas: true, padding: 5, id: `grid-container-${index}`, is: Container, "data-cy": `grid-container-${index}` }, index))) }), isEnabled && React.createElement(DefaultEditorBg)] }));
});
export const LayoutComponent = HOCCodeWrapComponent(LayoutJsx);
