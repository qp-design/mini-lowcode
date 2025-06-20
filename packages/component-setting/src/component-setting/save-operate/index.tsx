import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {actionField, ApiComponent, diyFormTransform, marginField, paddingField} from '../../common';

const containerField: FieldType[] = [
    {
        label: '按钮文本',
        name: 'text',
        type: 'text',
    },
    {
        label: '字体大小',
        name: 'fontSize',
        type: 'number',
    },
    ...marginField,
    ...paddingField,
    {
        label: '按钮大小',
        name: 'size',
        type: 'select',
        extraProps: {
            options: [
                {
                    label: '小',
                    value: 'small'
                },
                {
                    label: '中',
                    value: 'middle'
                },
                {
                    label: '大',
                    value: 'large'
                }
            ]
        }
    },
    {
        label: '打开抽屉code',
        name: 'openKey',
        type: 'text',
    },
    {
        label: '重新查询key',
        name: 'retryKey',
        type: 'text',
    },
    {
        label: '宽度',
        name: 'width',
        type: 'number',
    },
    {
        label: '高度',
        name: 'height',
        type: 'number',
    },
    {
        label: '按钮类型',
        name: 'type',
        type: 'select',
        extraProps: {
            options: [
                {
                    value: 'primary',
                    label: '主要'
                },
                {
                    value: 'dashed',
                    label: '虚线'
                },
                {
                    value: 'link',
                    label: '链接'
                },
                {
                    value: 'text',
                    label: '文本'
                },
                {
                    value: 'default',
                    label: '默认'
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
    {
        title: '数据源',
        formFields: [
            {
                label: '保存api',
                name: 'api',
                type: 'slot',
                extraProps: {
                    render: ApiComponent
                }
            },
          {
            label: '',
            name: 'params',
            type: 'formList',
            extraProps: {
              innerForm: [
                {
                  label: '参数',
                  name: 'key',
                },
                {
                  label: '值',
                  name: 'value',
                }
              ]
            }
          },
            {
                label: '参数包裹key',
                name: 'preKey',
                type: 'text',
                extraProps: {
                    placeholder: '默认为空'
                }
            },
        ]
    },
    {
        title: '表单值转化',
        formFields: diyFormTransform
    },
    {
        title: '逻辑',
        formFields: actionField
    },
]
export const SaveOperateComponentSettings = basicSettings(baseFormField)

