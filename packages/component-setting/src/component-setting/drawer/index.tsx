import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-tool';

const containerField: FieldType[] = [
  {
    label: '抽屉code',
    name: 'code',
    type: 'text',
  },
  {
    label: '抽屉title',
    name: 'title',
    type: 'text',
  },
  {
    label: '抽屉宽度',
    name: 'width',
    type: 'number',
  },
  {
    label: '抽屉位置',
    name: 'placement',
    type: 'select',
    extraProps: {
      options: [
        {
          label: '上',
          value: 'top'
        },
        {
          label: '下',
          value: 'bottom'
        },
        {
          label: '左',
          value: 'left'
        },
        {
          label: '右',
          value: 'right'
        }
      ]
    }
  },
  {
    label: '关闭时销毁',
    name: 'destroyOnHidden',
    type: 'switch',
  }
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const DrawerComponentSettings = basicSettings(baseFormField)

