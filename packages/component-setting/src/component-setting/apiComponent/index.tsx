import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import {ApiComponent, paddingField} from "../../common";
import {apiConfig} from "../../common/api/apiConfig";
import {isUndefined} from "lodash-es";

const containerField: FieldType[] = [
    (form) => {
        return {
            label: '组件类型',
            name: 'componentType',
            type: 'select',
            extraProps: {
                dependencies: ['api'],
                onChange(value: string) {
                    if(value === 'detail') {
                        form.setFieldValue('dataPath', '')
                        form.setFieldValue('storeKey', 'defaultValue')
                    } else {
                        form.setFieldValue('dataPath', 'list')
                    }
                },
                options: [
                    {
                        label: '列表',
                        value: 'list'
                    },
                    {
                        label: '非列表',
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
        calIsVisible: (form) => form.getFieldValue('componentType') === 'list'
    },
    {
        label: 'pageSize',
        name: 'rows',
        type: 'number',
        calIsVisible: (form) => !form.getFieldValue('pagination') && form.getFieldValue('componentType') === 'list'
    },
    ...paddingField,
]

const baseFormField: formConfigType[] = [
    {
        title: '样式',
        formFields: containerField
    },
    {
        title: '数据源',
        formFields: [
            (form) => {
                return {
                    label: 'api',
                    name: 'api',
                    type: 'slot',
                    extraProps: {
                        onChange(value: string) {
                            //@ts-ignore
                            const res = apiConfig[value];
                            if(!isUndefined(value)) {
                                const params = form.getFieldsValue()
                                form.setFieldsValue({
                                    ...params,
                                    ...res
                                })
                            }
                        },
                        render: ApiComponent
                    }
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
                extraProps: {
                  dependencies: ['api'],
                },
                calIsVisible: (form) => form.getFieldValue('componentType') === 'detail'
            },
        ]
    },
]
export const ApiComponentSettings = basicSettings(baseFormField)

