import {basicSettings, formConfigType} from '@brushes/core-transform';
import {FieldType} from '@brushes/form';

const dataFormField: FieldType[] = [
  {
    label: '是否需要注册',
    name: 'isNeedRegister',
    type: 'switch',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '基础配置',
    formFields: dataFormField
  }
]

export const LoginComponentSettings = basicSettings(baseFormField)
