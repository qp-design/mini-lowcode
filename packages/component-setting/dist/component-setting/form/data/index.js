import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-nocheck
import { Button, Modal } from 'antd';
import { memo, useEffect, useRef, useState } from 'react';
import TableJsx from './table';
import { DynamicForm } from '@brushes/form';
import { store } from '../../../store';
const Add = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const formConfig = [
        {
            type: 'select',
            name: 'selectKey',
            extraProps: {
                options: [
                    {
                        label: '字端1',
                        value: 'key'
                    },
                    {
                        label: '字端2',
                        value: 'key2'
                    }
                ]
            }
        }
    ];
    const onSubmit = (...params) => {
        const [value, suc,] = params;
        console.log(42, value);
        suc();
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: showModal, children: "\u65B0\u589E" }), _jsx(Modal, { title: "\u65B0\u589E\u67E5\u8BE2\u5B57\u7AEF", open: isModalOpen, onOk: handleOk, onCancel: handleCancel, children: _jsx(DynamicForm, { onSubmit: onSubmit, fields: formConfig }) })] }));
};
export const WrapTable = memo(({ form, onChange }) => {
    const activeModule = form.getFieldValue('activeModule');
    const initialValue = form.getFieldValue('columns');
    const isFirst = useRef(true);
    const [column, setColumn] = useState(initialValue);
    useEffect(() => {
        if (isFirst.current && initialValue) {
            setColumn(initialValue);
        }
        else {
            const { tableConfig } = store[activeModule];
            setColumn(tableConfig);
        }
        console.log(74, '第一次', isFirst.current, activeModule, initialValue);
        return () => {
            console.log('====', isFirst.current);
            isFirst.current = false;
        };
    }, [activeModule]);
    return (_jsxs(_Fragment, { children: [_jsx(Add, {}), _jsx(TableJsx, { column: column, onChange: onChange })] }));
});
