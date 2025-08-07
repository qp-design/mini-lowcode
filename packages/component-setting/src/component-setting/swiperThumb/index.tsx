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
    label: '组件store的key',
    name: 'storeKey',
    type: 'text',
  },
  {
    label: '数据路径',
    name: 'dataPath',
    type: 'text',
  },
  {
    label: '数据分割符',
    name: 'splitStr',
    type: 'text',
    extraProps: {
      placeholder: '数据源是字符串需要添加'
    }
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const SwiperThumbComponentSettings = basicSettings(baseFormField)

