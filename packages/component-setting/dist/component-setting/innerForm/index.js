import { jsx as _jsx } from "react/jsx-runtime";
import { basicSettings } from '@brushes/component-core';
import { WrapTable } from './data';
import ApiComponent from '../container/api';
const dataFormField = [
    {
        label: '',
        name: 'formConfig',
        type: 'slot',
        extraProps: {
            render: ({ form, onChange }) => {
                const initialValue = form.getFieldValue('formConfig');
                return (_jsx(WrapTable, { param: 'tableConfig', initialValue: initialValue, id: 'name', title: 'label', onChange: onChange }));
            }
        }
    },
    {
        label: '联动Key',
        name: 'linkKey',
        type: 'text',
    },
    {
        label: '数据源',
        name: 'api',
        type: 'slot',
        extraProps: {
            render({ onChange, name, form }) {
                const value = form.getFieldValue(name);
                return _jsx(ApiComponent, { onChange: onChange, value: value });
            }
        }
    }
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
export const InnerFormSettings = basicSettings(baseFormField);
