import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';

const containerField: FieldType[] = [
  {
    label: 'store数据key',
    name: 'storeKey',
    type: 'text',
  },
  {
    label: '默认文本说明',
    name: 'description',
    type: 'text',
  },
  {
    label: '回调查询函数名',
    name: 'callbackName',
    type: 'text',
  },
  {
    label: '打开抽屉key',
    name: 'openKey',
    type: 'text',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '逻辑',
    formFields: containerField
  },
]
export const AddressItemComponentSettings = basicSettings(baseFormField)

