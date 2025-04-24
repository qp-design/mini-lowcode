//@ts-nocheck
import {Button, Modal} from 'antd';
import {Dispatch, useEffect, useRef, useState} from 'react';
import TableJsx from './table';
import {DynamicForm, FieldType, submitType, FormInstance, NamePath} from '@brushes/form';

const Add = <T extends object>({setColumn, name}: {setColumn: Dispatch<T>; name: NamePath}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const formConfig: FieldType[] = [
    {
      type: 'text',
      label: '表单标题',
      name: 'label',
    },
    {
      type: 'text',
      label: '表单name',
      name: 'name',
    },
    {
      type: 'select',
      label: '控件类型',
      name: 'type',
      extraProps: {
        options: [
          {
            label: 'Form.List',
            value: 'formList'
          },
          {
            label: '输入框',
            value: 'text'
          },
          {
            label: '文本域',
            value: 'textarea'
          },
          {
            label: '数字输入框',
            value: 'number'
          },
          {
            label: '多选框',
            value: 'checkboxGroup'
          },
          {
            label: '下拉框',
            value: 'select'
          },
          {
            label: '单选框',
            value: 'radioGroup'
          },
          {
            label: '日期区间',
            value: 'range'
          },
          {
            label: '日期',
            value: 'date'
          },
          {
            label: '日历',
            value: 'cascader'
          },
          {
            label: '上传',
            value: 'upload'
          },
          {
            label: '开关',
            value: 'switch'
          },
          {
            label: '颜色',
            value: 'color'
          }
        ]
      },
    }
  ];

  const onSubmit = (...params: submitType) => {
    const [value, suc,] = params;
    setIsModalOpen(false);
    const preValue = form.getFieldValue(name);
    setColumn(preValue.concat(value))
    suc()
  }

  return (
    <>
      <Button onClick={showModal}>新增</Button>
      <Modal
        destroyOnClose={true}
        title="新增标签页卡片"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <DynamicForm
          colon={false}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onSubmit={onSubmit}
          saveText={'确认'}
          fields={formConfig}
        />
      </Modal>
    </>
  )
}

/**
 * @param {param} store里面数据的对应key
 * @param {initialValue} Form表单列默认数据
 * @param {title} column的name
 * @param {id} column的key
 * @param {onChange} Form改变数据方法
 */
interface WrapTableType<T> {
  param: string;
  form: FormInstance;
  initialValue: Array<T>;
  title: string;
  id: string;
  name: NamePath;
  onChange: (e: any) => void
}
export const WrapTable = <T extends object>({onChange, name, title, id, initialValue, form}:
                                              WrapTableType<T>) => {
  // const isFirst = useRef(true);
  // const [column, setColumn] = useState<T>(initialValue);
  console.log(143, initialValue);
  // useEffect(() => {
  //   if(isFirst.current && initialValue) {
  //     setColumn(initialValue)
  //   }
  //   return () => {
  //     isFirst.current = false;
  //   }
  // }, []);

  return (
    <>
      <Add<T> name={name} setColumn={onChange} form={form}/>
      <TableJsx<T> name={name} form={form} onChange={onChange} title={title} id={id}/>
    </>
  )
}
