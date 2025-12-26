import {basicSettings, formConfigType} from '@brushes/core-transform';
import {FieldType} from '@brushes/form';
import {actionField} from "../../common";

const dataFormField: FieldType[] = [
  {
    name: 'protocol',
    label: '协议默认勾选',
    type: 'switch',
  },
  {
    name: 'type',
    label: '用户类型',
    type: 'select',
    extraProps: {
      options: [
        {
          label: 'b2b',
          value: 'b2b'
        },
        {
          label: 'b2c',
          value: 'b2c'
        }
      ]
    }
  }
]

const baseFormField: formConfigType[] = [
  {
    title: '基础配置',
    formFields: dataFormField
  },
  {
    title: '逻辑',
    formFields: actionField
  }
]

export const LoginComponentSettings = basicSettings(baseFormField)
