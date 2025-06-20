import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-tool';
import {useStyle} from "../logoWithSearch/style";
import {paddingField, SelectPicture} from "../../common";

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
    label: '布局方式',
    name: 'flexDirection',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 'row',
          label: '水平'
        },
        {
          value: 'column',
          label: '垂直'
        }
      ]
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
    ...paddingField,
  {
    label: '高度',
    name: 'height',
    type: 'number',
    extraProps: {
    }
  },
  {
    label: '宽度',
    name: 'width',
    type: 'text',
    extraProps: {
      addonAfter: '%或px',
      placeholder: '请输入具体数值或百分比'
    }
  },
  {
    label: '水平对齐方式',
    name: 'justifyContent',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 'flex-start',
          label: '左对齐'
        },
        {
          value: 'flex-end',
          label: '右对齐'
        },
        {
          value: 'center',
          label: '居中对齐'
        },
        {
          value: 'space-between',
          label: '两端对齐'
        },
        {
          value: 'space-around',
          label: '间隔相等'
        }
      ]
    }
  },
  {
    label: '垂直对齐方式',
    name: 'alignItems',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 'flex-start',
          label: '顶部对齐'
        },
        {
          value: 'flex-end',
          label: '底部对齐'
        },
        {
          value: 'center',
          label: '垂直对齐'
        },
        {
          value: 'baseline',
          label: '第一行文字'
        },
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
export const OutContainerSettings = basicSettings(baseFormField)
