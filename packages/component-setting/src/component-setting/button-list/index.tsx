import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {actionField, marginField, paddingField} from '../../common';

const layoutField: FieldType[] = [
    ...marginField,
    ...paddingField,
    {
        name: 'align',
        type: 'select',
        label: '对齐方式',
        extraProps: {
            options: [
                {
                    label: '开始',
                    value: 'start',
                },
                {
                    label: '结束',
                    value: 'end',
                },
                {
                    label: '居中',
                    value: 'center',
                },
                {
                    label: 'baseline',
                    value: 'baseline',
                }
            ]
        }
    },
    {
      name: 'storeKey',
      label: 'store的key',
      type: 'text'
    },
    {
        name: 'direction',
        type: 'select',
        label: '方向',
        extraProps: {
            options: [
                {
                    label: '水平',
                    value: 'horizontal',
                },
                {
                    label: '垂直',
                    value: 'vertical',
                }
            ]
        }
    }
]

const containerField: FieldType[] = [
    {
        label: '',
        name: 'buttonList',
        type: 'formList',
        extraProps: {
            innerForm: [
                {
                    label: '名称',
                    name: 'name',
                },
                {
                    label: '类型',
                    name: 'type',
                    type: 'select',
                    extraProps: {
                        options: [
                            {
                                value: 'render',
                                label: '自定义'
                            },
                            {
                                value: 'link',
                                label: '普通'
                            },
                        ]
                    }
                },
                {
                    label: '状态key',
                    name: 'idKey',
                },
                {
                  label: '状态value',
                  name: 'dataState',
                }
            ]
        }
    }
]


const baseFormField: formConfigType[] = [
    {
        title: '布局',
        formFields: layoutField
    },
    {
        title: '数据',
        formFields: containerField
    },
    // {
    //     title: '逻辑',
    //     formFields: actionField
    // },
]
export const ButtonListSettings = basicSettings(baseFormField, 'vertical')

