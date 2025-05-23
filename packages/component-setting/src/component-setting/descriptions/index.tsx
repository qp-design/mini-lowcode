import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
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
                label: 'api',
                name: 'api',
                type: 'slot',
                extraProps: {
                    render: ApiComponent
                }
            },
            {
                label: '',
                name: 'listConfig',
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
                label: '回调查询函数名',
                name: 'callbackName',
                type: 'text',
            },
            {
                label: '接口默认数据',
                name: 'defaultValue',
                type: 'select',
                extraProps: {
                    options: [
                        {
                            label: '数组',
                            value: '[]'
                        },
                        {
                            label: '对象',
                            value: '{}'
                        },
                        {
                            label: '字符串',
                            value: ''
                        },
                    ]
                },
            },
            {
                label: '组件数据路径',
                name: 'dataPath',
                type: 'text',
                calIsVisible: (form) => form.getFieldValue('componentType') !== 'detail'
            },
            {
                label: '子组件Store的key',
                name: 'storeKey',
                type: 'text',
                calIsVisible: (form) => form.getFieldValue('componentType') === 'detail'
            },
        ]
    },
]
export const DescriptionComponentSettings = basicSettings(baseFormField)

