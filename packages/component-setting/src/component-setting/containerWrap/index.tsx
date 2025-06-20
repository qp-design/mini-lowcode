import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-tool';
import {useStyle} from "../logoWithSearch/style";
import {SelectPicture} from "../../common";

const containerField: FieldType[] = [
  {
    label: '背景色',
    name: 'background',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '背景图',
    name: 'backgroundImage',
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
    label: '高度',
    name: 'height',
    type: 'number',
    extraProps: {
      suffix: 'vh',
    }
  },
  {
    label: '宽度',
    name: 'width',
    type: 'number',
    extraProps: {
      suffix: 'vw',
    }
  }
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  }
]
export const ContainerWrapSettings = basicSettings(baseFormField)
