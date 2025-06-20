import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
    ...paddingField,
    ...marginField,
    {
        name: 'expressKey',
        label: '物流抽屉key',
        type: 'text',
    },
    {
        name: 'hidden',
        label: '隐藏促销',
        type: 'switch',
    },
    {
        name: 'borderRadius',
        label: '圆角',
        type: 'number',
    },
    {
        name: 'refundKey',
        label: '退单key',
        type: 'text',
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
export const OrderItemComponentSettings = basicSettings(baseFormField)

