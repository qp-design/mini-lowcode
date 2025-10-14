import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
  {
    label: '文本颜色',
    name: 'color',
    type: 'color',
  },
  {
    label: '高度',
    name: 'height',
    type: 'number',
  },
  {
    label: '参数',
    name: 'config',
    type: 'formList',
    extraProps: {
      innerForm: [
        {
          label: '参数',
          name: 'label',
        },
        {
          label: '值',
          name: 'value',
        },
        {
          label: '箭头',
          type: 'switch',
          name: 'arrow',
          layout: 'vertical'
        }
      ]
    }
  },
  {
    label: '文本大小',
    name: 'fontSize',
    type: 'number',
  },
  {
    label: '是否加粗',
    name: 'fontWeight',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 400,
          label: '正常'
        },
        {
          value: 800,
          label: '加粗'
        },
      ]
    }
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const GoodSortComponentSettings = basicSettings(baseFormField)

