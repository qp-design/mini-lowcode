import {basicSettings, formConfigType} from '@brushes/component-core';
import {FieldType} from '@brushes/form';


const dataFormField: FieldType[] = [
    {
        label: '字体大小',
        name: 'fontSize',
        type: 'number'
    },
    {
        label: '',
        name: 'buttonList',
        type: 'formList',
        extraProps: {
            innerForm: [
                {
                    label: '参数',
                    name: 'name',
                },
                {
                    label: 'code',
                    name: 'code',
                },
                {
                    label: '值',
                    name: 'dataState',
                }
            ]
        }
    },
]


const baseFormField: formConfigType[] = [
    {
        title: '数据源',
        formFields: dataFormField
    }
]

export const ButtonListSettings = basicSettings(baseFormField)
