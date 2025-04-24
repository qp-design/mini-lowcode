import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';

const containerField: FieldType[] = [
  {
    label: '商品数据唯一key',
    name: 'dataKey',
    type: 'text',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '逻辑',
    formFields: containerField
  },
]
export const SkuListComponentSettings = basicSettings(baseFormField)

