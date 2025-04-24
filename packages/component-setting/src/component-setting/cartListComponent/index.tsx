import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';

const containerField: FieldType[] = [
  {
    label: '数据路径path',
    name: 'dataPath',
    type: 'text',
  },
  {
    label: '组件Store取值key',
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

