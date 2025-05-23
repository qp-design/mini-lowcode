import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
    ...paddingField,
    ...marginField,
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
    {
        label: '抽屉code',
        name: 'openKey',
        type: 'text',
    },
]

const baseFormField: formConfigType[] = [
  {
    title: '逻辑',
    formFields: containerField
  },
]
export const OrderItemGoodSettings = basicSettings(baseFormField)

