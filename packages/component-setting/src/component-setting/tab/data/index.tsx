//@ts-nocheck
import {Button, Modal} from 'antd';
import {Dispatch, useEffect, useRef, useState} from 'react';
import TableJsx from '../../table/data/table';
import {DynamicForm, FieldType, submitType, FormInstance} from '@brushes/form';

const Add = <T extends object>({setColumn}: {setColumn: Dispatch<T>}) => {
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
      label: '标题',
      name: 'label',
    },
    {
      type: 'text',
      label: 'key',
      name: 'key',
    }
  ];

  const onSubmit = (...params: submitType) => {
    const [value, suc,] = params;
    setColumn(prev => prev.concat(value))
    suc()
  }

  return (
    <>
      <Button onClick={showModal}>新增</Button>
      <Modal
        title="新增标签页卡片"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <DynamicForm
          colon={false}
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
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
  initialValue: Array<T>;
  title: string;
  id: string;
  onChange: (e: any) => void
}
export const WrapTable = <T extends object>({onChange, title, id, initialValue}:
                                              WrapTableType<T>) => {
  const isFirst = useRef(true);
  const [column, setColumn] = useState<T>(initialValue);

  useEffect(() => {
    if(isFirst.current && initialValue) {
      setColumn(initialValue)
    }
    return () => {
      isFirst.current = false;
    }
  }, []);

  return (
    <>
      <Add<T> setColumn={setColumn}/>
      <TableJsx<T> column={column} onChange={onChange} title={title} id={id}/>
    </>
  )
}
