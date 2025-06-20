import {basicSettings, formConfigType} from '@brushes/core-transform';
import {FieldType} from '@brushes/form';
import {AddButton, paddingField, SelectCube} from '../../common';


const dataFormField: FieldType[] = [
  {
    label: '类名',
    name: 'className',
    type: 'text',
    extraProps: {
      placeholder: 'nav'
    }
  },
    ...paddingField,
  {
    label: '是否需要分割线',
    name: 'isNeedLine',
    type: 'switch',
  },
  {
    label: '分类导航配置',
    name: 'menu',
    type: 'formList',
    extraProps: {
      innerForm: [
        {
          label: '分类导航配置',
          name: ['imgUrl', 'path', 'title'],
          type: 'slot',
          extraProps: {
            render: SelectCube,
            needInput: true,
            parentName: ['menu']
          }
        }
      ],
      AddJsx: ({add}: any) => {
        return <AddButton title={'添加'} add={add}/>;
      }
    }
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '数据源',
    formFields: dataFormField,
  }
]

export const NavigatorComponentSettings = basicSettings(baseFormField, 'vertical')
