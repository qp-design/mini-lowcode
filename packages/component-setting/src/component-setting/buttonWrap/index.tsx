import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {FieldType} from '@brushes/form';

const containerField: FieldType[] = [
  {
    label: '开始颜色',
    name: 'startColor',
    type: 'color'
  },
  {
    label: '结束颜色',
    name: 'endColor',
    type: 'color'
  },
  {
    label: '字体颜色',
    name: 'color',
    type: 'color'
  },
  {
    label: '字符间距',
    name: 'letterSpacing',
    type: 'number'
  },
  {
    label: '字体粗细',
    name: 'fontWeight',
    type: 'number'
  },
]


const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]

export const ButtonWrapSettings = basicSettings(baseFormField)
