import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-tool';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
  {
    label: '背景色',
    name: 'background',
    type: 'color',
  },
  {
    label: '获取store数据key',
    name: 'storeKey',
    type: 'text',
  },
  {
    label: 'form控件name',
    name: 'formItemCode',
    type: 'text'
  },
  {
    label: '获取数据路径',
    name: 'dataPath',
    type: 'text',
    extraProps: {
      placeholder: '不需要处理就为空'
    }
  },
  {
    label: '显示code',
    name: 'optionsKey',
    type: 'text',
  },
  {
    label: '显示name',
    name: 'optionsName',
    type: 'text',
  },
  {
    label: '圆角',
    name: 'borderRadius',
    type: 'number',
  },
    ...paddingField,
    ...marginField
]



const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },

]
export const PaymentServiceSettings = basicSettings(baseFormField)

