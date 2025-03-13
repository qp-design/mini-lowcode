import {basicSettings, formConfigType} from '@brushes/component-core';
import {FieldType} from '@brushes/form';

const containerField: FieldType[] = [
  {
    label: '一行几个',
    name: 'grid',
    type: 'number',
  },
  {
    label: '背景颜色',
    name: 'background',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  }
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  }
]
export const LayoutSettings = basicSettings(baseFormField)
