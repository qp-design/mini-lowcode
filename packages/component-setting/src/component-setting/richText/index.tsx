import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
  {
    label: 'code',
    name: 'code',
    type: 'text',
  },
  {
    label: '组件storeKey',
    name: 'storeKey',
    type: 'text',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const RichTextComponentSettings = basicSettings(baseFormField)

