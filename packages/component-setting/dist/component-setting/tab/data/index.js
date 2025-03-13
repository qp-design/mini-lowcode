import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-nocheck
import { Button, Modal } from 'antd';
import { useEffect, useRef, useState } from 'react';
import TableJsx from '../../table/data/table';
import { DynamicForm } from '@brushes/form';
const Add = ({ setColumn }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const formConfig = [
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
    const onSubmit = (...params) => {
        const [value, suc,] = params;
        setColumn(prev => prev.concat(value));
        suc();
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: showModal, children: "\u65B0\u589E" }), _jsx(Modal, { title: "\u65B0\u589E\u6807\u7B7E\u9875\u5361\u7247", open: isModalOpen, onCancel: handleCancel, footer: null, children: _jsx(DynamicForm, { colon: false, labelCol: { span: 2 }, wrapperCol: { span: 22 }, onSubmit: onSubmit, saveText: '确认', fields: formConfig }) })] }));
};
export const WrapTable = ({ onChange, title, id, initialValue }) => {
    const isFirst = useRef(true);
    const [column, setColumn] = useState(initialValue);
    useEffect(() => {
        if (isFirst.current && initialValue) {
            setColumn(initialValue);
        }
        return () => {
            isFirst.current = false;
        };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Add, { setColumn: setColumn }), _jsx(TableJsx, { column: column, onChange: onChange, title: title, id: id })] }));
};
