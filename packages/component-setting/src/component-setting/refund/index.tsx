import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
  {
    label: '回调查询函数名',
    name: 'callbackName',
    type: 'text',
  },
  {
    label: '售后抽屉key',
    name: 'openKey',
    type: 'text',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const RefundComponentSettings = basicSettings(baseFormField)

