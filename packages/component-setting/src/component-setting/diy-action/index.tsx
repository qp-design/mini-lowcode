import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-tool';
import {ApiComponent, paddingField} from '../../common';

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
    name: 'callbackName',
    label: '回调函数的名',
    type: 'text',
  },
  {
    name: 'value',
    label: '取store数据key',
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
  // {
  //   title: '逻辑',
  //   formFields: actionField
  // },
]
export const DiyActionSettings = basicSettings(baseFormField)

