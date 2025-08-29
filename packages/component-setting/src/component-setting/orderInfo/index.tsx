import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
  {
    label: 'Store的key',
    name: 'storeKey',
    type: 'text',
  },
  {
    label: '积分Store的key',
    name: 'pointKey',
    type: 'text',
  },
    ...paddingField,
    ...marginField,
  {
    label: '背景色',
    name: 'background',
    type: 'color',
  },
  {
    label: '圆角',
    name: 'borderRadius',
    type: 'number',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '数据',
    formFields: containerField
  },
]
export const OrderInfoComponentSettings = basicSettings(baseFormField)

