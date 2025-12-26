import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {actionField, ApiComponent, paddingField} from '../../common';

const layoutField: FieldType[] = [
  {
    name: 'fontSize',
    label: '字体大小',
    type: 'text',
  },
    ...paddingField
]


const containerField: FieldType[] = [
  {
    name: 'api',
    label: 'api地址',
    type: 'slot',
    extraProps: {
      render: ApiComponent
    }
  },
  {
    name: 'paramKey',
    label: '传参key',
    type: 'text',
  },
  {
    name: 'description',
    label: '弹出框内容描述',
    type: 'textarea',
    extraProps: {
      placeholder: '默认标题拼接'
    }
  },
  {
    name: 'callbackName',
    label: '回调函数的名',
    type: 'text',
  },
  {
    name: 'callbackNameParent',
    label: '父级回调函数的名',
    type: 'text',
  },
  {
    name: 'storeKey',
    label: 'store数据key',
    type: 'text',
  },
  {
    name: 'value',
    label: '取store数据路径key',
    type: 'text',
  },
]



const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: layoutField
  },
  {
    title: '数据',
    formFields: containerField
  },
  {
    title: '逻辑',
    formFields: actionField
  },
]
export const DiyActionSettings = basicSettings(baseFormField)

