import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { DynamicForm } from '@brushes/form';
import { Button, Modal } from 'antd';
export const Add = ({ setColumn }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const formConfig = useMemo(() => [
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
    const onSubmit = (...params) => {
        const [value, suc,] = params;
        setColumn(prev => prev.concat(value));
        suc();
        handleCancel();
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: showModal, children: "\u65B0\u589E" }), _jsx(Modal, { title: "\u65B0\u589E\u6807\u7B7E\u9875\u5361\u7247", open: isModalOpen, onCancel: handleCancel, footer: null, children: _jsx(DynamicForm, { colon: false, labelCol: { span: 4 }, wrapperCol: { span: 20 }, onSubmit: onSubmit, saveText: '确认', fields: formConfig }) })] }));
};
