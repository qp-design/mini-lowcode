import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {FieldType} from '@brushes/form';


const dataFormField: FieldType[] = [
    {
        label: '间隔',
        name: 'gap',
        type: 'number',
    },
    {
        label: '一行几个',
        name: 'columns',
        type: 'number',
    },
    {
        label: '总数',
        name: 'total',
        type: 'number'
    }
]


const baseFormField: formConfigType[] = [
    {
        title: '数据源',
        formFields: dataFormField
    },
]

export const GridComponentSettings = basicSettings(baseFormField)
