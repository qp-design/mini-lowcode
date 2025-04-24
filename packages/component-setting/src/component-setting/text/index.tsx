import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
  {
    label: '文本',
    name: 'text',
    type: 'text',
  },
  {
    label: 'code',
    name: 'code',
    type: 'text',
  },
  {
    label: '文本颜色',
    name: 'color',
    type: 'color',
  },
    ...marginField,
    ...paddingField,
  {
    label: '最多几行',
    name: 'num',
    type: 'number',
  },
  {
    label: '宽度',
    name: 'width',
    type: 'number',
  },
  {
    label: '高度',
    name: 'height',
    type: 'number',
  },
  {
    label: '对齐方式',
    name: 'textAlign',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 'left',
          label: '左对齐'
        },
        {
          value: 'center',
          label: '居中对齐'
        },
        {
          value: 'right',
          label: '右对齐'
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
export const TextCompnentSettings = basicSettings(baseFormField)

