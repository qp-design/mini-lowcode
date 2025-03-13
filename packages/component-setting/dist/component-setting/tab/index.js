import { jsx as _jsx } from "react/jsx-runtime";
import { basicSettings } from '@brushes/component-core';
import { WrapTable } from './data';
const dataFormField = [
    {
        label: '选择表头',
        name: 'tabPosition',
        type: 'select',
        extraProps: {
            allowClear: true,
            options: [
                {
                    value: 'left',
                    label: '左边'
                },
                {
                    value: 'right',
                    label: '右边'
                },
                {
                    value: 'top',
                    label: '顶部'
                },
                {
                    value: 'bottom',
                    label: '底部'
                }
            ]
        }
    },
    {
        label: '',
        name: 'columns',
        type: 'slot',
        extraProps: {
            render: ({ form, onChange }) => {
                const initialValue = form.getFieldValue('columns');
                return (_jsx(WrapTable, { param: 'tableConfig', initialValue: initialValue, id: 'key', title: 'label', onChange: onChange }));
            }
        }
    },
];
const baseFormField = [
    // {
    //   title: '样式',
    //   formFields: containerField
    // },
    {
        title: '数据源',
        formFields: dataFormField
    }
];
export const TabSettings = basicSettings(baseFormField);
