import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-tool';
import {useStyle} from "../logoWithSearch/style";
import {actionField, SelectPicture} from "../../common";

const containerField: FieldType[] = [
    {
        label: '高度',
        name: 'height',
        type: 'number',
    },
    {
        label: '图片宽度',
        name: 'width',
        type: 'number',
    },
    {
        label: '图片的圆角',
        name: 'borderRadius',
        type: 'number',
    },
    {
        label: '图片的key',
        name: 'code',
        type: 'text',
    },
    {
        label: '跳转链接',
        name: ['image', 'path'],
        type: 'text',
    },
    {
        label: '图片',
        name: ['image', 'imgUrl'],
        type: 'slot',
        extraProps: {
            render: ({onChange, form, name}) => {
                const {styles} = useStyle();
                return (
                    <div className={styles.wrap}>
                        <SelectPicture form={form} name={name} onChange={onChange}/>
                    </div>
                )
            },
        }
    }
]

const baseFormField: formConfigType[] = [
    {
        title: '样式',
        formFields: containerField
    },
    {
        title: '逻辑',
        formFields: actionField
    },
]
export const ImageCompnentSettings = basicSettings(baseFormField)

