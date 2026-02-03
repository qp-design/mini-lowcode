import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
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
    ...paddingField,
    ...marginField
]



const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },

]
export const CreditComponentSettings = basicSettings(baseFormField)

