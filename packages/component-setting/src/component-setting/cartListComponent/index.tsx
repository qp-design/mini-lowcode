import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
    ...paddingField,
    ...marginField,
    {
        label: '背景色',
        name: 'background',
        type: 'color',
    },
    {
        label: '组件数据路径',
        name: 'dataPath',
        type: 'text',
    },
    {
        label: '空数据说明',
        name: 'description',
        type: 'text',
    },
    {
        label: '数据Store的key',
        name: 'storeKey',
        type: 'text',
    },
]

const baseFormField: formConfigType[] = [
  {
    title: '逻辑',
    formFields: containerField
  },
]
export const CartListComponentSettings = basicSettings(baseFormField)

