import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import {useStyle} from "../logoWithSearch/style";
import {SelectLink, SelectPicture} from "../../common";

const containerField: FieldType[] = [
  {
    label: '高度',
    name: 'height',
    type: 'number',
  },
  {
    label: '图片链接',
    name: ['image', 'link'],
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
]
export const ImageCompnentSettings = basicSettings(baseFormField)

