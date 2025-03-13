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
import { dynamicFormFields } from '@brushes/form';
import { HOCCodeWrapComponent } from '@brushes/component-core';
import React, { useMemo } from 'react';
import { useNode } from '@craftjs/core';
import { useSelectOption } from 'component-store';
const ComponentJsx = React.forwardRef((_a, ref) => {
    var { layout, background, padding, formConfig, api, linkKey } = _a, restProps = __rest(_a, ["layout", "background", "padding", "formConfig", "api", "linkKey"]);
    const { form } = useNode(node => ({
        form: node.data.custom.form
    }));
    const { options } = useSelectOption(form, api, linkKey);
    const newFormConfig = useMemo(() => {
        return formConfig.map(item => {
            return Object.assign({}, item);
        });
    }, [formConfig, linkKey]);
    console.log(44, newFormConfig, formConfig);
    return (_jsx("div", { ref: ref, style: { background, padding, minWidth: 20, height: 30 }, children: dynamicFormFields(newFormConfig, form) }));
});
export const InnerFormComponent = HOCCodeWrapComponent(ComponentJsx);
