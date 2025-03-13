import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-core';
import ActionJsx from '../../common/action';

const actionField: FieldType[] = [
  {
    label: '自定义组件',
    name: '$_children',
    type: 'slot',
    extraProps: {
      render({onChange, value}) {
        return <ActionJsx onChange={onChange} value={value}/>
      }
    }
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '逻辑',
    formFields: actionField
  },
]
export const SlotSettings = basicSettings(baseFormField)

