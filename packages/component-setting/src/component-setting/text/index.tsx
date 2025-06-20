import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-tool';
import {actionField, marginField, paddingField, SelectCube} from "../../common";
import {FormInstance} from "antd";

const containerField: FieldType[] = [
    {
        label: '文本',
        name: 'text',
        type: 'text',
    },
    {
        label: 'store',
        name: 'module',
        type: 'select',
        extraProps: {
            options: [
                {
                    label: '全局store',
                    value: 'rootStore'
                },
                {
                    label: '非全局store',
                    value: 'moduleStore'
                }
            ]
        }
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
        label: '最多几行',
        name: 'num',
        type: 'number',
    },
    {
        label: '类名',
        name: 'className',
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

const dataField: FieldType[] = [
    {
        label: '数据转化',
        name: 'transformData',
        type: 'select',
        extraProps: {
            options: [
                {
                    label: '日期',
                    value: 'time'
                },
                {
                    label: '数据转化',
                    value: 'dataType'
                },
                {
                    label: '金额',
                    value: 'format'
                }
            ]
        }
    },
    {
        label: '日期格式',
        name: 'format',
        type: 'select',
        calIsVisible: (form: FormInstance) => form.getFieldValue("transformData") === 'time',
        extraProps: {
            dependencies: ['transformData'],
            options: [
                {
                    label: '年-月-日',
                    value: 'YYYY-MM-DD'
                },
                {
                    label: '年-月-日 时:分:秒',
                    value: 'YYYY-MM-DD hh:mm:ss'
                }
            ]
        }
    },
    {
        label: '码表',
        name: 'localScheme',
        type: 'formList',
        calIsVisible: (form: FormInstance) => form.getFieldValue("transformData") === 'dataType',
        extraProps: {
            dependencies: ['transformData'],
            innerForm: [
            {
              label: '名称',
              name: 'label',
            },
            {
              label: 'code',
              name: 'value',
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
        title: '数据',
        formFields: dataField
    },
    {
        title: '逻辑',
        formFields: actionField
    },
]
export const TextCompnentSettings = basicSettings(baseFormField)

