import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
  {
    label: '宽度',
    name: 'width',
    type: 'number',
  },
  {
    label: 'store的数据key',
    name: 'storeKey',
    type: 'text',
  },
  {
    label: '数据存储数据key',
    name: 'saveStoreKey',
    type: 'text',
  },
  {
    label: '每次改变步数key',
    name: 'stepKey',
    type: 'text',
  },
  {
    label: '最小值的key',
    name: 'min',
    type: 'text',
  },
  {
    label: '最大值的key',
    name: 'max',
    type: 'text',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  }
]
export const GoodNumberComponentSettings = basicSettings(baseFormField)

