import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';

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
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const CardListCompnentSettings = basicSettings(baseFormField)

