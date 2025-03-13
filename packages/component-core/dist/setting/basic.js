import { jsx as _jsx } from "react/jsx-runtime";
import { Card, Form } from "antd";
import { Fragment } from 'react';
import { dynamicFormFields, useImmutableCallback } from '@brushes/form';
import { useNode } from '@craftjs/core';
import { transformCode } from '../tool';
export const basicSettings = (formFields) => {
    return () => {
        const [form] = Form.useForm();
        const { configProps, actions: { setProp }, } = useNode((node) => ({
            configProps: node.data.props,
        }));
        const callbackImpl = useImmutableCallback((changedValues) => {
            console.log(23, changedValues);
            if (changedValues.hasOwnProperty('&_slot')) {
            }
            setProp((props) => {
                Object.entries(changedValues).forEach(([key, value], index) => {
                    if (/^\$_/.test(key)) {
                        value = transformCode(value);
                    }
                    // @ts-ignore
                    props[key] = value;
                });
            }, 500);
            // setProp((props: object) => {}, 500);
        });
        return (_jsx(Form, { form: form, onValuesChange: callbackImpl, initialValues: configProps, children: formFields.map((item, indx) => {
                return (_jsx(Fragment, { children: item.title ? (_jsx(Card, { size: "small", style: { marginBottom: 10 }, title: item.title, bodyStyle: { paddingBottom: 0 }, children: dynamicFormFields(item.formFields, form) })) : (dynamicFormFields(item.formFields, form)) }, indx));
            }) }));
    };
};
