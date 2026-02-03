import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform-mini';

const containerField: FieldType[] = [
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
      label: '子表格',
      name: 'expandable',
      type: 'switch'
    },
    {
        label: '是否展示边框',
        name: 'bordered',
        type: 'switch',
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
                label: 'store数据路径',
                name: 'dataPath',
                type: 'text',
            },
            {
                label: '表格行选中控件',
                name: 'type',
                type: 'select',
                extraProps: {
                    options: [
                        {
                            value: 'checkbox',
                            label: '多选框'
                        },
                        {
                            value: 'radio',
                            label: '单选框'
                        },
                        {
                            value: '',
                            label: '无'
                        }
                    ]
                }
            },
            {
                label: '数据唯一key',
                name: 'ROWKEYY',
                type: 'text',
            },
            {
                label: 'Store的key',
                name: 'storeKey',
                type: 'text'
            },
            {
                label: '高度',
                name: 'height',
                type: 'number'
            },
            {
                label: '总量数据',
                name: 'providerNum',
                type: 'text',
                extraProps: {
                    placeholder: '控制选择框是否可以选择,providerNum 总量'
                }
            },
            {
                label: '已消耗数据',
                name: 'consumeNum',
                type: 'text',
                extraProps: {
                    placeholder: '控制选择框是否可以选择,消耗量'
                }
            },
            {
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
            },
        ]
    },
]
export const TableComponentSettings = basicSettings(baseFormField)

