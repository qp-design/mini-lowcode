import {basicSettings, formConfigType} from '@brushes/component-core';
import {FieldType} from '@brushes/form';
import {SelectPicture} from '../../common';
import { useStyle } from './style';

const dataFormField: FieldType[] = [
    {
        label: 'logo链接',
        name: ['logo', 'link'],
        type: 'text',
    },
    {
      label: 'logo宽度',
      name: 'logoWidth',
      type: 'number'
    },
    {
        label: '按钮宽度',
        name: 'buttonWidth',
        type: 'number'
    },
    {
        label: 'logo图片',
        name: ['logo', 'imgUrl'],
        type: 'slot',
        extraProps: {
            render: ({onChange, form, name}) => {
                const { styles } = useStyle();
                return (
                    <div className={styles.wrap}>
                        <SelectPicture form={form} name={name} onChange={onChange}/>
                    </div>
                )
            },
        }
    },
]

const baseFormField: formConfigType[] = [
    {
        title: '数据源',
        formFields: dataFormField,
    }
]

export const LogoWithSearchSettings = basicSettings(baseFormField, 'horizontal')
