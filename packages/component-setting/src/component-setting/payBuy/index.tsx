import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {FieldType} from '@brushes/form';
import {ApiComponent} from '../../common';

const containerField: FieldType[] = [
  {
    label: '提交按钮',
    name: 'saveText',
    type: 'text'
  },
  {
    label: '宽度',
    name: 'width',
    type: 'number'
  },
  {
    label: '高度',
    name: 'height',
    type: 'number'
  },
  {
    label: 'Store的key',
    name: 'storeKey',
    type: 'text'
  },
]

const dataFormField: FieldType[] = [
  {
    label: '保存api',
    name: 'api',
    type: 'slot',
    extraProps: {
      render: ApiComponent
    }
  },
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

export const PayBuyComponentSettings = basicSettings(baseFormField)
