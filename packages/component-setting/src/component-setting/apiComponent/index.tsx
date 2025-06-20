import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import {ApiComponent, marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
    (form) => {
        return {
            label: '组件类型',
            name: 'componentType',
            type: 'select',
            extraProps: {
                onChange(value: string) {
                    if(value === 'detail') {
                        form.setFieldValue('dataPath', '')
                    } else {
                        form.setFieldValue('dataPath', 'list')
                    }
                },
                options: [
                    {
                        label: '每个独立模块',
                        value: 'list'
                    },
                    {
                        label: '常规',
                        value: 'detail'
                    }
                ]
            }
        }
    },
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
        label: '宽度',
        name: 'width',
        type: 'number',
    },
    {
        label: '边框颜色',
        name: 'borderColor',
        type: 'color',
        extraProps: {
            allowClear: true,
            showText: true
        }
    },
    {
        label: '一行几个',
        name: 'num',
        type: 'number',
        calIsVisible: (form) => form.getFieldValue('componentType') === 'list'
    },
    {
        label: '间距',
        name: 'gap',
        type: 'number',
        calIsVisible: (form) => form.getFieldValue('componentType') === 'list'
    },
    {
        label: '最小高度',
        name: 'minHeight',
        type: 'number',
    },
    {
        label: '分页',
        name: 'pagination',
        type: 'switch',
        // calIsVisible: (form) => form.getFieldValue('componentType') === 'list'
    },
    {
        label: '一页多少条',
        name: 'rows',
        type: 'number',
        // calIsVisible: (form) => !form.getFieldValue('pagination') && form.getFieldValue('componentType') === 'list'
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
              label: '是否缓存',
              name: 'cacheParams',
              type: 'switch',
            },
            {
                label: '缓存时间',
                name: 'cacheParamsTime',
                calIsVisible: (form) => form.getFieldValue('cacheParams'),
                extraProps: {
                  dependencies: ['cacheParams'],
                  suffix: '分钟'
                },
                type: 'number',
            },
            {
                label: '回调查询函数名',
                name: 'callbackName',
                type: 'text',
            },
            {
                label: '空数据描述',
                name: 'description',
                type: 'text',
            },
            {
                label: '搜索组件结果页',
                name: 'isSearch',
                type: 'switch',
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
                // calIsVisible: (form) => form.getFieldValue('componentType') === 'list',
                extraProps: {
                    placeholder: '一般为空',
                    dependencies: ['componentType']
                }
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
export const ApiComponentSettings = basicSettings(baseFormField)

