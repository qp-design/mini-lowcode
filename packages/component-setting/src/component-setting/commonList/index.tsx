import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
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
        label: '回调查询函数名',
        name: 'callbackName',
        type: 'text',
    },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const CommonListComponentSettings = basicSettings(baseFormField)

