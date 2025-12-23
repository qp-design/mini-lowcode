import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {diyFormConfig} from "../../common";

const containerField: FieldType[] = [
  // {
  //   label: '回调查询函数名',
  //   name: 'callbackName',
  //   type: 'text',
  // },
  {
    label: '赠品是否要选择',
    name: 'giftSelect',
    type: 'switch',
  },
  // {
  //   label: '售后抽屉key',
  //   name: 'openKey',
  //   type: 'text',
  // },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
  {
    title: '配置项',
    formFields: [{
      label: '表格列',
      name: 'columns',
      type: 'formList',
      extraProps: {
        style: { marginBottom: '20px' },
        innerForm: [
          {
            label: '名称',
            name: 'title',
            layout: 'vertical',
          },
          {
            label: '值',
            name: 'value',
            layout: 'vertical',
          },
          {
            label: '扩展',
            name: 'type',
            type: 'switch',
            layout: 'vertical',
          },
          {
            label: '对齐',
            name: 'align',
            type: 'select',
            layout: 'vertical',
            extraProps: {
              options: [
                {
                  value: 'left',
                  label: '左边'
                },
                {
                  value: 'center',
                  label: '居中'
                },
                {
                  value: 'right',
                  label: '右边'
                }
              ]
            }
          },
          {
            label: '宽度',
            name: 'width',
            type: 'number',
            layout: 'vertical',
            extraProps: {
              style: {
                width: 50
              }
            }
          }
        ]
      }
    }]
  },
]
export const RefundBasicComponentSettings = basicSettings(baseFormField)

