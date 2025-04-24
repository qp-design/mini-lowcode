import {basicSettings, formConfigType} from '@brushes/component-core';
import {FieldType} from '@brushes/form';
import {WrapTable} from '../../common';


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
        label: '',
        name: 'columns',
        type: 'slot',
        extraProps: {
            render: ({form, onChange}) => {
                const initialValue = form.getFieldValue('columns');
                return (
                    <WrapTable<DataType>
                        param={'tableConfig'}
                        initialValue={initialValue}
                        id={'name'}
                        title={'label'}
                        onChange={onChange}
                    />
                )
            }
        }
    },
]

interface DataType {
    title: string;
    dataIndex: string;
    key: string;
}

const baseFormField: formConfigType[] = [
    // {
    //   title: '样式',
    //   formFields: containerField
    // },
    {
        title: '数据源',
        formFields: dataFormField
    }
]

export const TabComponentSettings = basicSettings(baseFormField)
