import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {useStyle} from "../logoWithSearch/style";
import {actionField, borderWidthHeight, marginField, SelectPicture} from "../../common";

const containerField: FieldType[] = [
  {
    label: '按钮文本',
    name: 'text',
    type: 'text',
  },
  ...marginField,
  ...borderWidthHeight,
  {
    label: '字体颜色',
    name: 'color',
    type: 'color',
  },
  {
    label: '字体大小',
    name: 'fontSize',
    type: 'number',
  },
  {
    label: '粗细',
    name: 'fontWeight',
    type: 'number',
    extraProps: {
      placeholder: '100 - 900 正百数字'
    }
  },
  {
    label: '背景色',
    name: 'background',
    type: 'color',
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
    label: '游客模式',
    name: '_tourist',
    type: 'switch',
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
  {
    title: '逻辑',
    formFields: actionField
  },
]
export const CarBadgeSettings = basicSettings(baseFormField)

