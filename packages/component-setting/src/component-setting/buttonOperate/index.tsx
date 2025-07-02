import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {actionField, marginField, paddingField, SelectPicture} from '../../common';
import {useStyle} from "../logoWithSearch/style";

const containerField: FieldType[] = [
  {
    label: '按钮文本',
    name: 'text',
    type: 'text',
  },
  {
    label: '是否需要禁用',
    name: 'disabled',
    type: 'select',
    extraProps: {
      options: [
        {
          label: '空',
          value: ''
        },
        {
          label: '禁用',
          value: true
        },
        {
          label: '不禁用',
          value: false
        }
      ]
    }
  },
  {
    label: '字体大小',
    name: 'fontSize',
    type: 'number',
  },
    ...marginField,
    ...paddingField,
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
    label: '打开父级抽屉code',
    name: 'parentOpenKey',
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
  {
    label: '按钮类型',
    name: 'type',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 'primary',
          label: '主要'
        },
        {
          value: 'dashed',
          label: '虚线'
        },
        {
          value: 'link',
          label: '链接'
        },
        {
          value: 'text',
          label: '文本'
        },
        {
          value: 'default',
          label: '默认'
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
  {
    title: '逻辑',
    formFields: actionField
  },
]
export const ButtonOperateSettings = basicSettings(baseFormField)

