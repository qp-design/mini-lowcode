var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { dynamicFormFields } from '@brushes/form';
import { HOCCodeWrapComponent } from '@brushes/component-core';
import React, { useMemo } from 'react';
import { Form, Button } from 'antd';
import { useStore } from 'component-store';
import { Element } from '@craftjs/core';
import { InnerFormComponent } from '../innerForm';
const ComponentJsx = React.forwardRef(({ layout, grid, background, padding, formConfig }, ref) => {
    const [form] = Form.useForm();
    const [, setParams] = useStore(state => state['params']);
    const newFormConfig = useMemo(() => {
        return formConfig.map(item => {
            const { type } = item;
            console.log(25, item);
            if (type === 'slot') {
                return Object.assign(Object.assign({}, item), { 
                    // shouldUpdate: (prevValues: any, curValues: any) => prevValues['skuNo'] !== curValues['skuNo'],
                    render() {
                        return (_jsx(Element, { canvas: true, id: 'react_context', custom: { form }, is: InnerFormComponent }));
                    } });
            }
            return item;
        });
    }, [formConfig]);
    console.log(44, newFormConfig, formConfig);
    const onSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        setParams({
            params: values
        });
    });
    return (_jsx("div", { ref: ref, style: { background, padding }, children: _jsxs(Form, { form: form, layout: layout, onFinish: onSubmit, children: [_jsx("div", { style: {
                        display: 'grid',
                        gridColumnGap: layout === 'vertical' ? 10 : 0,
                        gridTemplateColumns: `repeat(${grid}, 1fr)`
                    }, children: dynamicFormFields(newFormConfig, form) }), _jsx(Button, { type: "primary", htmlType: "submit", children: "\u67E5\u8BE2" })] }) }));
});
export const FormComponent = HOCCodeWrapComponent(ComponentJsx);
