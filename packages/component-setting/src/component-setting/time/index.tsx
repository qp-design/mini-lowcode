import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';

const containerField: FieldType[] = [
  {
    label: 'store的数据Key',
    name: 'storeKey',
    type: 'text',
  },
  {
    label: 'code',
    name: 'code',
    type: 'text',
  },
]



const baseFormField: formConfigType[] = [
  {
    title: '数据',
    formFields: containerField
  },

]
export const TimerComponentSettings = basicSettings(baseFormField)

