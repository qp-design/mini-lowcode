import {basicSettings, formConfigType} from '@brushes/component-core';
import {FieldType} from '@brushes/form';
import {borderWidthHeight} from "../../common";

const containerField: FieldType[] = [
  {
    label: '提示语',
    name: 'placeholder',
    type: 'text'
  },
  {
    label: '路径',
    name: 'path',
    type: 'text'
  },
  ...borderWidthHeight
]

const dataFormField: FieldType[] = [
  {
    label: '',
    name: 'transformSubmitDataConfig',
    type: 'formList',
    extraProps: {
      innerForm: [
        {
          label: '类型',
          name: 'type',
        },
        {
          label: '控件code',
          name: 'name',
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
    title: '数据源',
    formFields: dataFormField
  }
]

export const SearchComponentSettings = basicSettings(baseFormField)
