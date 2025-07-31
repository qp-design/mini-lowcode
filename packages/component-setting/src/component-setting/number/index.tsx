import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';

const containerField: FieldType[] = [
    {
        label: 'store的数据key',
        name: 'storeKey',
        type: 'text',
    },
    {
        label: 'code',
        name: 'code',
        type: 'text',
    },
    {
        label: '精度',
        name: 'precision',
        type: 'number',
    },
    {
        label: '字体',
        name: 'fontFamily',
        type: 'select',
        extraProps: {
            options: [
                {
                    label: '黑体',
                    value: 'QJHEITI'
                }
            ]
        }
    },
    {
        label: '文本颜色',
        name: 'color',
        type: 'color',
    },
    {
        label: '对齐方式',
        name: 'textAlign',
        type: 'select',
        extraProps: {
            options: [
                {
                    value: 'left',
                    label: '左对齐'
                },
                {
                    value: 'center',
                    label: '居中对齐'
                },
                {
                    value: 'right',
                    label: '右对齐'
                }
            ]
        }
    },
    {
        label: '文本大小',
        name: 'fontSize',
        type: 'number',
    },
    {
        label: '后缀',
        name: 'suffix',
        type: 'text',
    },
    {
        label: '设置千分位标识符',
        name: 'groupSeparator',
        type: 'text',
    },
    {
        label: '数值的标题',
        name: 'title',
        type: 'text',
    },
    {
        label: '前缀',
        name: 'prefix',
        type: 'text',
    },
    {
        label: '是否加粗',
        name: 'fontWeight',
        type: 'select',
        extraProps: {
            options: [
                {
                    value: 400,
                    label: '正常'
                },
                {
                    value: 800,
                    label: '加粗'
                },
            ]
        }
    },
]


const baseFormField: formConfigType[] = [
    {
        title: '样式',
        formFields: containerField
    }
]
export const NumberComponentSettings = basicSettings(baseFormField)

