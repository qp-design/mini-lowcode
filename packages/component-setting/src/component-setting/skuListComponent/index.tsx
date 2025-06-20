import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
  {
    label: '商品数据唯一key',
    name: 'dataKey',
    type: 'text',
  },
  {
    label: '优惠券查询key',
    name: 'couponKey',
    type: 'text',
  },
  {
    label: '促销查询key',
    name: 'promotionKey',
    type: 'text',
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '逻辑',
    formFields: containerField
  },
]
export const SkuListComponentSettings = basicSettings(baseFormField)

