import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {ApiComponent} from "../../common";

const containerField: FieldType[] = [
  {
    label: '文本颜色',
    name: 'color',
    type: 'color',
  },
  {
    label: '面包屑标题',
    name: 'label',
    type: 'text',
  },
  {
    label: '高度',
    name: 'height',
    type: 'number',
  },
  {
    label: '文本大小',
    name: 'fontSize',
    type: 'number',
  },
  {
    label: '是否加粗',
    name: 'fontWeight',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 400,
          label: '正常'
        },
        {
          value: 800,
          label: '加粗'
        },
      ]
    }
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
  {
    title: '数据源',
    formFields: [
      {
        label: 'api',
        name: 'api',
        type: 'slot',
        extraProps: {
          render: ApiComponent
        }
      },
      {
        label: '数据label',
        name: 'goodsClassName',
        type: 'text',
      },
      {
        label: '数据Key',
        name: 'goodsClassCode',
        type: 'text',
      },
    ]
  }
]
export const GoodCategoryComponentSettings = basicSettings(baseFormField)

