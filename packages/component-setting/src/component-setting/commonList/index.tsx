import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
    ...paddingField,
    ...marginField,
    {
        name: 'borderRadius',
        label: '圆角',
        type: 'number',
    },
    {
        name: 'key',
        label: '数据唯一key',
        type: 'text',
    },
    {
        name: 'num',
        label: '一行几个',
        type: 'number',
    },
    {
        name: 'gap',
        label: '间距',
        type: 'number',
    },
    {
        name: 'description',
        label: '空数据描述',
        type: 'text',
    },
    {
        label: '组件数据路径',
        name: 'dataPath',
        type: 'text',
    },
    {
        label: '数据Store的key',
        name: 'storeKey',
        type: 'text',
    },
    {
        label: '展示多少数量',
        name: 'maxNum',
        type: 'number',
    },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const CommonListComponentSettings = basicSettings(baseFormField)

