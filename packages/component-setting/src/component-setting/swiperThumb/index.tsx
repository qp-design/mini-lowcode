import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform-mini';

const containerField: FieldType[] = [
  {
    label: '大图图片高度',
    name: 'height',
    type: 'number',
  },
  {
    label: '缩略图片高度',
    name: 'minHeight',
    type: 'number',
  },
  {
    label: '箭头底部位置',
    name: 'bottom',
    type: 'number',
  },
  {
    label: '圆角',
    name: 'borderRadius',
    type: 'number',
  },
  {
    label: '两个模块间距',
    name: 'gapHeight',
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

