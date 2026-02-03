import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {ApiComponent, marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
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
        label: '描述布局',
        name: 'layout',
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
    {
        label: '大小',
        name: 'size',
        type: 'select',
        extraProps: {
            options: [
                {
                    value: 'default',
                    label: '默认'
                },
                {
                    value: 'middle',
                    label: '中'
                },
                {
                    value: 'small',
                    label: '小'
                }
            ]
        }
    },
    {
        label: '标题',
        name: 'title',
        type: 'text',
    },
    {
        label: '是否展示边框',
        name: 'bordered',
        type: 'switch',
    },
    {
        label: '一行几个',
        name: 'column',
        type: 'number',
    },
    ...paddingField,
    ...marginField,
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
                label: '',
                name: 'listConfig',
                type: 'formList',
                extraProps: {
                    innerForm: [
                        {
                            label: '名称',
                            name: 'label',
                        },
                        {
                            label: 'code',
                            name: 'key',
                        },
                    ]
                }
            },
        ]
    },
]
export const DescriptionComponentSettings = basicSettings(baseFormField)

