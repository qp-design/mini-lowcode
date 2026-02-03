import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {FieldType} from '@brushes/form';

const containerField: FieldType[] = [
  {
    label: '游客模式',
    name: '_tourist',
    type: 'switch'
  },
  {
    label: '宽度',
    name: 'width',
    type: 'number'
  },
  {
    label: '高度',
    name: 'height',
    type: 'number'
  },
  {
    label: '背景色',
    name: 'backgroundColor',
    type: 'color'
  },
  {
    label: 'hover子栏目宽度',
    name: 'widthHover',
    type: 'number'
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  }
]

export const CategoryComponentSettings = basicSettings(baseFormField)
