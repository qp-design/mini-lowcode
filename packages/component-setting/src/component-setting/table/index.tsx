import {basicSettings, formConfigType} from '@brushes/component-tool';
import {dynamicFormFields, FieldType} from '@brushes/form';
import {WrapTable} from '../../common';


const dataFormField: FieldType[] = [
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
    type: 'number',
    extraProps: {
    }
  },
  {
    label: '选择表头',
    name: 'activeModule',
    type: 'select',
    extraProps: {
      allowClear: true,
      options: [
        {
          value: 'good',
          label: '商品'
        },
        {
          value: 'order',
          label: '订单'
        }
      ]
    }
  },
  {
    label: '',
    name: 'columns',
    type: 'slot',
    extraProps: {
      render: ({form, onChange}) => {
        const initialValue = form.getFieldValue('columns');
        const activeModule = form.getFieldValue('activeModule');
        return (
          <WrapTable<DataType>
            param={'tableConfig'}
            initialValue={initialValue}
            id={'dataIndex'}
            title={'title'}
            onChange={onChange}
            activeModule={activeModule}
          />
        )
      }
    }
  },
  {
    label: '',
    name: 'rowKey',
    type: 'slot',
    extraProps: {
      allowClear: true,
      render({form}) {
        const optionList = form.getFieldValue('columns');
        const opt = optionList.map((item:any) => ({
          value: item.key,
          label: item.title
        }));
        const fields = [
          {
            label: '数据主键',
            name: 'rowKey',
            type: 'select',
            extraProps: {
              allowClear: true,
              options: opt
            }
          }
        ]
        return (
          <div style={{marginTop: 10}}>
            {dynamicFormFields(fields, form)}
          </div>
        )
      }
    }
  },
]

interface DataType {
  title: string;
  dataIndex: string;
  key: string;
}

const baseFormField: formConfigType[] = [
  // {
  //   title: '样式',
  //   formFields: containerField
  // },
  {
    title: '数据源',
    formFields: dataFormField
  }
]

export const TableComponentSettings = basicSettings(baseFormField)
