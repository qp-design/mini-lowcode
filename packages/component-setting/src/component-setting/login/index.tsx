import {basicSettings, formConfigType} from '@brushes/core-transform';
import {FieldType} from '@brushes/form';

const dataFormField: FieldType[] = [

]

const baseFormField: formConfigType[] = [
  {
    title: '基础配置',
    formFields: dataFormField
  }
]

export const LoginComponentSettings = basicSettings(baseFormField)
