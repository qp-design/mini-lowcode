import {basicSettings, formConfigType} from '@brushes/component-tool';
import {FieldType} from '@brushes/form';
import {actionField, paddingField} from "../../common";


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
        label: '是否显示角标',
        name: 'badge',
        type: 'switch'
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
            innerForm: [
                {
                    label: '参数',
                    name: 'label',
                },
                {
                    label: '值',
                    name: 'key',
                },
                {
                    label: 'code',
                    name: 'code',
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
    {
        title: '逻辑',
        formFields: actionField
    },
]

export const TabComponentSettings = basicSettings(baseFormField)
