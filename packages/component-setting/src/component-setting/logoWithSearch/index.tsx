import {basicSettings, formConfigType} from '@brushes/component-core';
import {FieldType} from '@brushes/form';
import {SelectPicture, SelectLink} from '../../common';
import { useStyle } from './style';

const dataFormField: FieldType[] = [
    {
        label: 'logo链接',
        name: ['logo', 'link'],
        type: 'slot',
        extraProps: {
            render: ({onChange, form, name}) => {
                const { styles } = useStyle();
                return (
                    <div className={styles.wrap}>
                        <SelectLink form={form} name={name} onChange={onChange}/>
                    </div>
                )
            },
        }
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
    {
        label: '购物车链接',
        name: ['car', 'link'],
        type: 'slot',
        extraProps: {
            render: ({onChange, form, name}) => {
                const { styles } = useStyle();
                return (
                    <div className={styles.wrap}>
                        <SelectLink form={form} name={name} onChange={onChange}/>
                    </div>
                )
            },
        }
    },
    {
        label: '购物车图片',
        name: ['car', 'imgUrl'],
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
