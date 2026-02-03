import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {FieldType} from '@brushes/form';

const containerField: FieldType[] = [
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
    label: '组件数据路径',
    name: 'dataPath',
    type: 'text',
  },
  {
    label: '数据Store的key',
    name: 'storeKey',
    type: 'text',
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
  },
]

export const CategorySimpleComponentSettings = basicSettings(baseFormField)
