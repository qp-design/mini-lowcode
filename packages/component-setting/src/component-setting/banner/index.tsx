import {basicSettings, formConfigType} from '@brushes/component-core';
import {FieldType} from '@brushes/form';
import {AddButton, SelectCube} from '../../common';


const dataFormField: FieldType[] = [
    {
        label: '圆角',
        name: 'borderRadius',
        type: 'number',
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
        label: '分类导航配置',
        name: 'menu',
        type: 'formList',
        extraProps: {
            innerForm: [
                {
                    label: '',
                    name: ['imgUrl', 'link', 'title'],
                    type: 'slot',
                    extraProps: {
                        render: SelectCube,
                        needInput: true,
                        parentName: ['menu']
                    }
                }
            ],
            AddJsx: ({add}: any) => {
                return <AddButton add={add}/>;
            }
        }
    },
]

const baseFormField: formConfigType[] = [
    {
        title: '数据源',
        formFields: dataFormField,
    }
]

export const BannerComponentSettings = basicSettings(baseFormField, 'vertical')
