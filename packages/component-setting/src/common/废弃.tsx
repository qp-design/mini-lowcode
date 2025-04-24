import {Dispatch, useMemo, useState} from 'react';
import {DynamicForm, FieldType, submitType} from '@brushes/form';

import {Button, Modal} from 'antd';


export const Add = <T extends object>({setColumn}: {setColumn: Dispatch<T>}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const formConfig: FieldType[] = useMemo(() => [
    {
      type: 'text',
      label: '标题',
      name: 'label',
    },
    {
      type: 'text',
      label: 'code',
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
  ], []);

  const onSubmit = (...params: submitType) => {
    const [value, suc,] = params;
    setColumn(prev => prev.concat(value))
    suc()
    handleCancel();
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
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onSubmit={onSubmit}
          saveText={'确认'}
          fields={formConfig}
        />
      </Modal>
    </>
  )
}
