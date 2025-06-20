import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {useStyle} from "../logoWithSearch/style";
import {SelectPicture} from "../../common";

const containerField: FieldType[] = [
  {
    label: '图片',
    name: 'imgUrl',
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
    label: '配置',
    name: 'config',
    type: 'formList',
    extraProps: {
      innerForm: [
        {
          label: '名称',
          name: 'label',
        },
        {
          label: 'code',
          name: 'code',
        }
      ]
    }
  }
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const UserInfoComponentSettings = basicSettings(baseFormField)

