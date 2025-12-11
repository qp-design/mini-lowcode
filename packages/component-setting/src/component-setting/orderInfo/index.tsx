import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
  {
    label: 'Store的key',
    name: 'storeKey',
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
  {
    label: '订单类型',
    name: 'contractType',
    type: 'text',
    extraProps: {
      placeholder: '此类型支付只计算运费'
    }
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '数据',
    formFields: containerField
  },
]
export const OrderInfoComponentSettings = basicSettings(baseFormField)

