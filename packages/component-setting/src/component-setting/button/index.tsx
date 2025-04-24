import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import {actionField} from '../../common';

const containerField: FieldType[] = [
  {
    label: '按钮文本',
    name: 'text',
    type: 'text',
  },
  {
    label: '打开抽屉code',
    name: 'openKey',
    type: 'text',
  },
  {
    label: '按钮类型',
    name: 'type',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 'primary',
          label: '主要'
        },
        {
          value: 'dashed',
          label: '虚线'
        },
        {
          value: 'link',
          label: '链接'
        },
        {
          value: 'text',
          label: '文本'
        },
        {
          value: 'default',
          label: '默认'
        }
      ]
    }
  },
]



const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
  {
    title: '逻辑',
    formFields: actionField
  },
]
export const ButtonSettings = basicSettings(baseFormField)

