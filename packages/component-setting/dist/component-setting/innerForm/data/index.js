import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-nocheck
import { useEffect, useRef, useState } from 'react';
import TableJsx from '../../table/data/table';
import { Add } from '../../../common/add';
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
