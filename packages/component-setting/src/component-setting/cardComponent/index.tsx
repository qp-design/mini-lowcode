import {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import {paddingField, actionField} from "../../common";

const containerField: FieldType[] = [
    ...paddingField,
  {
    label: '背景色',
    name: 'background',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '高度',
    name: 'height',
    type: 'number',
  },
  {
    label: '圆角',
    name: 'borderRadius',
    type: 'number',
  },
  {
    label: '边框颜色',
    name: 'borderColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
  {
    title: '逻辑',
    formFields: actionField
  },
]

export const CardComponentSettings = basicSettings(baseFormField)

