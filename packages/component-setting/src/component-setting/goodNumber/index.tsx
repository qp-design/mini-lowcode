import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
  {
    label: '宽度',
    name: 'width',
    type: 'number',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  }
]
export const GoodNumberComponentSettings = basicSettings(baseFormField)

