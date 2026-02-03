import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {FieldType} from '@brushes/form';
import {WrapTable} from '../../common';
import ApiComponent from '../container/api';


const dataFormField: FieldType[] = [
  {
    label: '',
    name: 'formConfig',
    type: 'slot',
    extraProps: {
      render: ({form, onChange}) => {
        const initialValue = form.getFieldValue('formConfig');
        return (
          <WrapTable<DataType>
            param={'tableConfig'}
            initialValue={initialValue}
            id={'name'}
            title={'label'}
            onChange={onChange}
          />
        )
      }
    }
  },
  {
    label: '联动Key',
    name: 'linkKey',
    type: 'text',
  },
  {
    label: '数据源',
    name: 'api',
    type: 'slot',
    extraProps: {
      render({ onChange, name, form }) {
        const value = form.getFieldValue(name)
        return <ApiComponent onChange={onChange} value={value}/>
      }
    }
  }
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

export const InnerFormSettings = basicSettings(baseFormField)
