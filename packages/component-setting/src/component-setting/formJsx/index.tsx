import {basicSettings, formConfigType} from '@brushes/core-transform';
import {FieldType} from '@brushes/form';
import {ApiComponent} from '../../common';

const containerField: FieldType[] = [
  {
    label: '表单名称',
    name: 'formName',
    type: 'text',
  },
  {
    label: '背景颜色',
    name: 'background',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '触发再次查询',
    name: 'callbackName',
    type: 'text'
  },
  {
    label: '抽屉code',
    name: 'openKey',
    type: 'text',
  },
  {
    label: '提交按钮',
    name: 'saveText',
    type: 'text'
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
  {
    label: '布局',
    name: 'layout',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 'horizontal',
          label: '水平'
        },
        {
          value: 'vertical',
          label: '垂直'
        },
        {
          value: 'inline',
          label: '内联'
        }
      ]
    }
  },
  {
    label: '内边距',
    name: 'padding',
    type: 'number'
  },
]
//
//
// interface DataType {
//   type: string;
//   title: string;
//   key: string;
// }

const dataFormField: FieldType[] = [
  {
    label: '选择表单配置',
    name: 'activeModule',
    type: 'select',
    extraProps: {
      allowClear: true,
      options: [
        {
          value: 'address',
          label: '地址'
        },
        {
          value: 'order',
          label: '订单'
        }
      ]
    }
  },
  // (form) => {
  //   return {
  //     label: '',
  //     name: 'formConfig',
  //     type: 'slot',
  //     extraProps: {
  //       dependencies: ['activeModule'],
  //       render: ({form, onChange}) => {
  //         const initialValue = form.getFieldValue('formConfig');
  //
  //         return (
  //             <WrapTable<DataType>
  //                 param={'tableConfig'}
  //                 initialValue={initialValue}
  //                 id={'name'}
  //                 form={form}
  //                 name={'formConfig'}
  //                 title={'label'}
  //                 onChange={onChange}
  //             />
  //         )
  //       }
  //     }
  //   }
  // },
  {
    label: '保存api',
    name: 'api',
    type: 'slot',
    extraProps: {
      render: ApiComponent
    }
  },
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
  {
    title: '数据源',
    formFields: dataFormField
  }
]

export const FormJsxComponentSettings = basicSettings(baseFormField)
