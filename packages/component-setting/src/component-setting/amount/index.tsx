import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import { marginField, paddingField } from "../../common";

const containerField: FieldType[] = [
    {
        label: '文本',
        name: 'text',
        type: 'text',
    },
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
        label: '基数',
        name: 'baseNumber',
        type: 'text',
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
        label: '背景色',
        name: 'background',
        type: 'color',
    },
    {
        label: '圆角',
        name: 'borderRadius',
        type: 'number',
    },
    ...marginField,
    ...paddingField,
    {
        label: '类名',
        name: 'className',
        type: 'text',
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
export const AmountComponentSettings = basicSettings(baseFormField)

