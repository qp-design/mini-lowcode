import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {FieldType} from '@brushes/form';
import {paddingField} from "../../common";


const dataFormField: FieldType[] = [
    {
        label: 'store的数据key',
        name: 'storeKey',
        type: 'text',
    },
    {
        label: '角标最大值',
        name: 'max',
        type: 'number',
    },
    {
        label: '字体大小',
        name: 'fontSize',
        type: 'number'
    },
    ...paddingField,
    {
        label: '',
        name: 'columns',
        type: 'formList',
        extraProps: {
            style: { marginBottom: 20 },
            innerForm: [
                {
                    label: '参数',
                    name: 'label',
                    layout: 'vertical'
                },
                {
                    label: 'store数据路径',
                    name: 'key',
                    layout: 'vertical'
                },
                {
                    label: '固定的值',
                    name: 'defaultValue',
                    layout: 'vertical'
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

export const BadgeComponentSettings = basicSettings(baseFormField)
