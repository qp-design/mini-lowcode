import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
  {
    label: '图片高度',
    name: 'height',
    type: 'number',
  },
  {
    label: '图片key',
    name: 'imgKey',
    type: 'text',
  },
  {
    label: '数据路径',
    name: 'dataPath',
    type: 'text',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const SwiperThumbComponentSettings = basicSettings(baseFormField)

