import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
  {
    label: 'store的数据Key',
    name: 'storeKey',
    type: 'text',
  },
  {
    label: 'code',
    name: 'code',
    type: 'text',
  },
  {
    label: '倒计时清零的标识Key',
    name: 'finishKey',
    type: 'text',
  },
  {
    label: '显示格式',
    name: 'format',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 'D 天 H 时 m 分 s 秒',
          label: '天/时/分/秒'
        },
        {
          value: 'H 时 m 分 s 秒',
          label: '时/分/秒'
        }
      ]
    }
  },
]



const baseFormField: formConfigType[] = [
  {
    title: '数据',
    formFields: containerField
  },

]
export const TimerComponentSettings = basicSettings(baseFormField)

