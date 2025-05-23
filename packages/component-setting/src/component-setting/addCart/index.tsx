import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import {useStyle} from "../logoWithSearch/style";
import {marginField, SelectPicture} from "../../common";

const containerField: FieldType[] = [
  {
    label: '按钮文本',
    name: 'text',
    type: 'text',
  },
  ...marginField,
  {
    label: '按钮大小',
    name: 'size',
    type: 'select',
    extraProps: {
      options: [
        {
          label: '小',
          value: 'small'
        },
        {
          label: '中',
          value: 'middle'
        },
        {
          label: '大',
          value: 'large'
        }
      ]
    }
  },
  {
    label: '打开抽屉code',
    name: 'openKey',
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
    label: '图片高度',
    name: 'imgHeight',
    type: 'number',
  },
  {
    label: '图片宽度',
    name: 'imgWidth',
    type: 'number',
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
    title: '样式',
    formFields: containerField
  },
]
export const AddCartComponentSettings = basicSettings(baseFormField)

