import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
  {
    label: '一行几个',
    name: 'num',
    type: 'number',
  },
  {
    label: '间距',
    name: 'gap',
    type: 'number',
  },
  {
    label: '数据',
    name: 'data',
    type: 'textarea',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const ListCommonComponentSettings = basicSettings(baseFormField)

