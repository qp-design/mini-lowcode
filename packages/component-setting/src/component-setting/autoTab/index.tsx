import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {FieldType} from '@brushes/form';
import {paddingField} from "../../common";


const dataFormField: FieldType[] = [
    {
        label: '选择表头',
        name: 'tabPosition',
        type: 'select',
        extraProps: {
            allowClear: true,
            options: [
                {
                    value: 'left',
                    label: '左边'
                },
                {
                    value: 'right',
                    label: '右边'
                },
                {
                    value: 'top',
                    label: '顶部'
                },
                {
                    value: 'bottom',
                    label: '底部'
                }
            ]
        }
    },
    {
        label: '字体大小',
        name: 'fontSize',
        type: 'number'
    },
    {
        label: '组件角标store',
        name: 'storeKey',
        type: 'text'
    },
    {
        label: '组件角标显示的key',
        name: 'keyName',
        type: 'text'
    },
    {
        label: '关闭时销毁',
        name: 'destroyOnHidden',
        type: 'switch'
    },
    ...paddingField,
    {
        label: '',
        name: 'columns',
        type: 'formList',
        extraProps: {
            style: { marginBottom: 20 },
            innerForm: [
                {
                    label: '参数',
                    name: 'label',
                    layout: 'vertical'
                },
                {
                    label: '值',
                    name: 'key',
                    layout: 'vertical'
                },
                {
                    label: 'code',
                    name: 'code',
                    layout: 'vertical',
                    extraProps: {
                        placeholder: '显示需要'
                    }
                }
            ]
        }
    },
]


const baseFormField: formConfigType[] = [
    {
        title: '数据源',
        formFields: dataFormField
    },
]

export const AutoTabComponentSettings = basicSettings(baseFormField)
