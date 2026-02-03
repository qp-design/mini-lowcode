import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {FieldType} from '@brushes/form';
import {marginField} from "../../common";

const containerField: FieldType[] = [
  {
    label: '是否虚线',
    name: 'dashed',
    type: 'switch'
  },
    ...marginField,
  {
    label: '文本',
    name: 'text',
    type: 'text'
  },
  {
    label: '线条边框',
    name: 'borderWidth',
    type: 'number'
  },
  {
    label: '线条颜色',
    name: 'borderColor',
    type: 'color'
  },
  {
    label: '普通正文样式',
    name: 'plain',
    type: 'switch'
  },
  {
    label: '分割线标题的位置',
    name: 'orientation',
    type: 'select',
    extraProps: {
      options: [
        {
          label: '开始',
          value: 'start'
        },
        {
          label: '居中',
          value: 'center'
        },
        {
          label: '末尾',
          value: 'end'
        }
      ]
    }
  },
  {
    label: '标题和边框之间的距离',
    name: 'orientationMargin',
    type: 'number'
  },
  {
    label: '水平还是垂直',
    name: 'type',
    type: 'select',
    extraProps: {
      options: [
        {
          label: '水平',
          value: 'horizontal'
        },
        {
          label: '垂直',
          value: 'vertical'
        }
      ]
    }
  },

]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]

export const DividerComponentSettings = basicSettings(baseFormField)
