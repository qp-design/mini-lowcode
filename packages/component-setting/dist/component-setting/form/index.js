import { jsx as _jsx } from "react/jsx-runtime";
import { basicSettings } from '@brushes/component-core';
import { WrapTable } from '../table/data';
const containerField = [
    {
        label: '背景颜色',
        name: 'background',
        type: 'color',
        extraProps: {
            allowClear: true,
            showText: true
        }
    },
    {
        label: '一行几个',
        name: 'grid',
        type: 'number'
    },
    {
        label: '布局',
        name: 'layout',
        type: 'select',
        extraProps: {
            options: [
                {
                    value: 'horizontal',
                    label: '水平'
                },
                {
                    value: 'vertical',
                    label: '垂直'
                },
                {
                    value: 'inline',
                    label: '内联'
                }
            ]
        }
    },
    {
        label: '内边距',
        name: 'padding',
        type: 'number'
    },
];
const dataFormField = [
    {
        label: '选择查询列',
        name: 'activeModule',
        type: 'select',
        extraProps: {
            allowClear: true,
            options: [
                {
                    value: 'good',
                    label: '商品'
                },
                {
                    value: 'order',
                    label: '订单'
                }
            ]
        }
    },
    {
        label: '',
        name: 'formConfig',
        type: 'slot',
        extraProps: {
            render: ({ form, onChange }) => {
                const initialValue = form.getFieldValue('formConfig');
                const activeModule = form.getFieldValue('activeModule');
                return (_jsx(WrapTable, { param: 'formConfig', initialValue: initialValue, id: 'name', title: 'label', onChange: onChange, activeModule: activeModule }));
            }
        }
    }
];
const baseFormField = [
    {
        title: '样式',
        formFields: containerField
    },
    {
        title: '数据源',
        formFields: dataFormField
    }
];
export const FormComponentSettings = basicSettings(baseFormField);
