import {basicSettings, formConfigType} from '@brushes/component-core';
import {FieldType} from '@brushes/form';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
  {
    label: '表单名称',
    name: 'formName',
    type: 'text',
  },
    ...paddingField,
    ...marginField,
  {
    label: '触发再次查询',
    name: 'callbackName',
    type: 'text'
  },
  {
    label: '布局',
    name: 'layout',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 'horizontal',
          label: '水平'
        },
        {
          value: 'vertical',
          label: '垂直'
        },
        {
          value: 'inline',
          label: '内联'
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
]

export const FormComponentSettings = basicSettings(baseFormField)
