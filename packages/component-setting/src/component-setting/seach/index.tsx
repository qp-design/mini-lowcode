import {basicSettings, formConfigType} from '@brushes/core-transform';
import {FieldType} from '@brushes/form';
import {borderWidthHeight} from "../../common";

const containerField: FieldType[] = [
  {
    label: '提示语',
    name: 'placeholder',
    type: 'text'
  },
  {
    label: '搜索本店按钮',
    name: 'isShopSearch',
    type: 'switch'
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
    label: '前缀',
    name: 'options',
    type: 'formList',
    extraProps: {
      innerForm: [
        {
          label: '名称',
          name: 'label',
        },
        {
          label: '路径',
          name: 'value',
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
