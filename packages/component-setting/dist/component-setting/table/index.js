import { jsx as _jsx } from "react/jsx-runtime";
import { basicSettings } from '@brushes/component-core';
import { dynamicFormFields } from '@brushes/form';
import { WrapTable } from './data';
const dataFormField = [
    {
        label: '选择表头',
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
        name: 'columns',
        type: 'slot',
        extraProps: {
            render: ({ form, onChange }) => {
                const initialValue = form.getFieldValue('columns');
                const activeModule = form.getFieldValue('activeModule');
                return (_jsx(WrapTable, { param: 'tableConfig', initialValue: initialValue, id: 'dataIndex', title: 'title', onChange: onChange, activeModule: activeModule }));
            }
        }
    },
    {
        label: '',
        name: 'rowKey',
        type: 'slot',
        extraProps: {
            allowClear: true,
            render({ form }) {
                const optionList = form.getFieldValue('columns');
                const opt = optionList.map((item) => ({
                    value: item.key,
                    label: item.title
                }));
                const fields = [
                    {
                        label: '数据主键',
                        name: 'rowKey',
                        type: 'select',
                        extraProps: {
                            allowClear: true,
                            options: opt
                        }
                    }
                ];
                return (_jsx("div", { style: { marginTop: 10 }, children: dynamicFormFields(fields, form) }));
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
export const TableComponentSettings = basicSettings(baseFormField);
