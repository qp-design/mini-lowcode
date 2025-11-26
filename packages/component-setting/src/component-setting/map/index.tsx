import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
    {
        label: '高度',
        name: 'height',
        type: 'number',
    },
    {
        label: 'store的数据key',
        name: 'storeKey',
        type: 'text',
    },
    {
        label: 'store数据路径',
        name: 'dataPath',
        type: 'text',
    },
]


const baseFormField: formConfigType[] = [
    {
        title: '样式',
        formFields: containerField
    },
]
export const MapComponentSettings = basicSettings(baseFormField)

