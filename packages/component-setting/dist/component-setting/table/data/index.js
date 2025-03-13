import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import TableJsx from './table';
import { store } from '../../../store';
import { Add } from '../../../common/add';
export const WrapTable = ({ activeModule, onChange, param, title, id, initialValue }) => {
    const isFirst = useRef(true);
    const [column, setColumn] = useState(initialValue);
    useEffect(() => {
        if (isFirst.current && initialValue) {
            setColumn(initialValue);
        }
        else {
            const obj = store[activeModule];
            setColumn(obj[param]);
        }
        console.log(74, '第一次', isFirst.current, activeModule, initialValue);
        return () => {
            console.log('====', isFirst.current);
            isFirst.current = false;
        };
    }, [activeModule]);
    console.log('column', column);
    return (_jsxs(_Fragment, { children: [_jsx(Add, { setColumn: setColumn }), _jsx(TableJsx, { column: column, onChange: onChange, title: title, id: id })] }));
};
