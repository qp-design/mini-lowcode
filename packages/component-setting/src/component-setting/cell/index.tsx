import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform-mini';

const containerField: FieldType[] = [
    {
        label: '对齐方式',
        name: 'align',
        type: 'select',
        extraProps: {
            options: [
                {
                    value: 'flex-start',
                    label: '左对齐'
                },
                {
                    value: 'center',
                    label: '居中'
                },
                {
                    value: 'flex-end',
                    label: '右对齐'
                }
            ]
        }
    },
    {
        type: 'switch',
        label: '是否有分割线',
        name: 'divider'
    },
    {
        type: 'number',
        label: '圆角半径',
        name: 'radius'
    },
    {
        type: 'text',
        label: '分组标题',
        name: 'title'
    },
    {
        type: 'text',
        label: '分组描述',
        name: 'description'
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
                label: '表格列',
                name: 'columns',
                type: 'formList',
                extraProps: {
                    style: { marginBottom: '20px' },
                    innerForm: [
                        {
                            label: '名称',
                            name: 'label',
                            layout: 'vertical',
                        },
                        {
                            label: '跳转路由',
                            name: 'value',
                            layout: 'vertical',
                        },
                    ]
                }
            },
        ]
    },
]
export const CellComponentSettings = basicSettings(baseFormField)

