import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {useStyle} from "../logoWithSearch/style";
import {SelectPicture} from "../../common";

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
        label: 'store的key',
        name: 'storeKey',
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
    },
    {
        label: '图片模式',
        name: 'fit',
        type: 'select',
        extraProps: {
            options: [
                {
                    value: 'scaleToFill',
                    label: '拉伸图片，使图片填满元素'
                },
                {
                    value: 'aspectFit',
                    label: '使图片的长边能完全显示出来'
                },
                {
                    value: 'aspectFill',
                    label: '使图片的短边能完全显示出来，裁剪长边'
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
]
export const ImageCompnentSettings = basicSettings(baseFormField)

