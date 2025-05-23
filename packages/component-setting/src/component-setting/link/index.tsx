import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import {useStyle} from "../logoWithSearch/style";
import {actionField, SelectLink, SelectPicture} from "../../common";

const containerField: FieldType[] = [
  {
    label: '文本',
    name: 'text',
    type: 'text',
  },
  {
    label: '字体大小',
    name: 'fontSize',
    type: 'number',
  },
  {
    label: '跳转链接',
    name: ['image', 'link'],
    type: 'text',
  },
  {
    label: '图片',
    name: ['image', 'imgUrl'],
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
export const LinkCompnentSettings = basicSettings(baseFormField)

