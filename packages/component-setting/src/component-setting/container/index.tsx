import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import ApiComponent from './api';

const containerField: FieldType[] = [
  {
    label: '1背景色',
    name: 'background',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '内边距',
    name: 'padding',
    type: 'number',
    extraProps: {
      suffix: 'px',
    }
  },
  {
    label: '宽度',
    name: 'width',
    type: 'number',
    extraProps: {
      suffix: '%',
    }
  },
  {
    label: '数据源',
    name: 'api',
    type: 'slot',
    extraProps: {
      render({ onChange, name, form }) {
        const value = form.getFieldValue(name)
        return <ApiComponent onChange={onChange} value={value}/>
      }
    }
  }
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  }
]
export const ContainerSettings = basicSettings(baseFormField)
