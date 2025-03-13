import { jsx as _jsx } from "react/jsx-runtime";
import { basicSettings } from '@brushes/component-core';
import ActionJsx from '../../common/action';
const containerField = [
    {
        label: '按钮文本',
        name: 'text',
        type: 'text',
    },
    {
        label: '按钮类型',
        name: 'type',
        type: 'select',
        extraProps: {
            options: [
                {
                    value: 'primary',
                    label: '主要'
                },
                {
                    value: 'dashed',
                    label: '虚线'
                },
                {
                    value: 'link',
                    label: '链接'
                },
                {
                    value: 'text',
                    label: '文本'
                },
                {
                    value: 'default',
                    label: '默认'
                }
            ]
        }
    },
];
const actionField = [
    {
        label: '逻辑',
        name: '$_actions',
        type: 'slot',
        extraProps: {
            render({ onChange, value }) {
                return _jsx(ActionJsx, { onChange: onChange, value: value });
            }
        }
    },
];
const baseFormField = [
    {
        title: '样式',
        formFields: containerField
    },
    {
        title: '逻辑',
        formFields: actionField
    },
];
export const ButtonSettings = basicSettings(baseFormField);
