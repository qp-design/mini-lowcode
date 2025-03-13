import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { dynamicFormFields } from '@brushes/form';
import { HOCCodeWrapComponent } from '@brushes/component-core';
import React from 'react';
import { Form, Button } from 'antd';
const fields = [
    {
        label: '商品标题',
        name: 'goodsName',
        type: 'text',
        rules: [{ required: true, message: '请输入标题' }],
        extraProps: {
            placeholder: '请输入商品标题'
        }
    },
    {
        label: '商品副标题',
        name: 'subtitle',
        type: 'text',
        extraProps: {
            placeholder: '请输入商品副标题'
        }
    },
    {
        label: '商品编号',
        name: 'goodsNo',
        rules: [{ required: true, message: '请输入商品编号' }],
        type: 'text',
        extraProps: {
            placeholder: '请输入商品编号'
        }
    },
];
const ComponentJsx = React.forwardRef(({ layout, grid, background, padding, formConfig }, ref) => {
    const [form] = Form.useForm();
    const onSubmit = (...args) => {
        console.log(34, args);
    };
    return (_jsx("div", { ref: ref, style: { background, padding }, children: _jsxs(Form, { form: form, layout: layout, onFinish: onSubmit, children: [_jsx("div", { style: {
                        display: 'grid',
                        gridColumnGap: layout === 'vertical' ? 10 : 0,
                        gridTemplateColumns: `repeat(${grid}, 1fr)`
                    }, children: dynamicFormFields(formConfig, form) }), _jsx(Button, { type: "primary", htmlType: "submit", children: "\u67E5\u8BE2" })] }) }));
});
export const FormComponent = HOCCodeWrapComponent(ComponentJsx);
