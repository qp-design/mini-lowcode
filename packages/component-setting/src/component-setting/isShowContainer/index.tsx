import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-tool';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
  {
    label: '路由显示条件',
    name: 'routerIsShow',
    type: 'text',
    extraProps: {
      placeholder: '请输入该模块显示的条件，默认显示'
    }
  },
  {
    label: '路由显示条件值',
    name: 'routerIsShowValue',
    type: 'text',
    extraProps: {
      placeholder: '一般使用场景是增删查，其他场景用不到'
    }
  },
  {
    label: 'store显示条件Key',
    name: 'moduleIsShow',
    type: 'text',
    extraProps: {
      placeholder: '条件为false,不显示, 空值显示'
    }
  },
  {
    label: 'store显示条件value',
    name: 'moduleShowValue',
    type: 'text',
    extraProps: {
      placeholder: '多个值可以用,拼接'
    }
  },
  {
    label: 'store数据Key',
    name: 'storeKey',
    type: 'text',
  },
  ...marginField,
  ...paddingField,
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  }
]
export const IsShowContainerSettings = basicSettings(baseFormField)
