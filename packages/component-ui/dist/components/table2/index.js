var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { ApplicationContext, Container } from '@brushes/component-core';
import { useMemo } from 'react';
import { Table } from 'antd';
import { get, isEmpty } from 'lodash-es';
import { useStore } from 'component-store';
import { Element, useEditor } from '@craftjs/core';
import { has } from 'lodash-es';
export const Table2 = (_a) => {
    var { columns = [], rowKey = 'id' } = _a, restProps = __rest(_a, ["columns", "rowKey"]);
    const [queryApi] = useStore(store => store['queryApi']);
    return (_jsx(_Fragment, { children: !isEmpty(columns) && queryApi ?
            _jsx(TableCom, Object.assign({ queryApi: queryApi, rowKey: rowKey, columns: columns }, restProps))
            :
                _jsx(Table, { columns: columns, dataSource: [] }) }));
};
const TableCom = (_a) => {
    var { columns, queryApi, rowKey = 'id' } = _a, restProps = __rest(_a, ["columns", "queryApi", "rowKey"]);
    const data = {};
    const { isEnabled } = useEditor(state => ({
        isEnabled: state.options.enabled
    }));
    const list = useMemo(() => {
        const dataList = get(data, 'list', []);
        if (isEnabled && !isEmpty(dataList)) {
            return [dataList[0]];
        }
        return dataList;
    }, [data]);
    const resultColunms = useMemo(() => {
        return columns.map(item => {
            const isSlot = has(item, 'type');
            if (isSlot) {
                return Object.assign(Object.assign({}, item), { render(_, context, idx) {
                        return (_jsx(ApplicationContext, { value: context, children: _jsx(Element, { canvas: true, id: item.key, custom: {
                                    key: idx,
                                }, is: Container }) }));
                    } });
            }
            return item;
        });
    }, [columns]);
    return (_jsx(Table, Object.assign({ pagination: { total: 0 }, rowKey: rowKey, columns: resultColunms, dataSource: list, onChange: () => { } }, restProps)));
};
