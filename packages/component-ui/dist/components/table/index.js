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
import { jsx as _jsx } from "react/jsx-runtime";
import { ApplicationContext, Container, HOCCodeWrapComponent } from '@brushes/component-core';
import React, { useMemo } from 'react';
import { Spin, Table } from 'antd';
import { get, isEmpty } from 'lodash-es';
import { useQuery } from '@tanstack/react-query';
import { get as getIo } from '@brushes/optimize';
import { useStore } from 'component-store';
import { useImmutableCallback } from '@brushes/form';
import { Element, useEditor } from '@craftjs/core';
import { has } from 'lodash-es';
const TableJsx = React.forwardRef((_a, ref) => {
    var { columns = [], rowKey = 'id' } = _a, restProps = __rest(_a, ["columns", "rowKey"]);
    const [queryApi] = useStore(store => store['queryApi']);
    return (_jsx("div", { ref: ref, children: !isEmpty(columns) && queryApi ?
            _jsx(TableCom, Object.assign({ queryApi: queryApi, rowKey: rowKey, columns: columns }, restProps))
            :
                _jsx(Table, { columns: columns, dataSource: [] }) }));
});
const TableCom = (_a) => {
    var { columns, queryApi, rowKey = 'id' } = _a, restProps = __rest(_a, ["columns", "queryApi", "rowKey"]);
    const [params, setParams] = useStore(store => store['params']);
    const { data = {}, isLoading, error } = useQuery({
        queryKey: [queryApi, params],
        queryFn: () => getIo(queryApi, params),
        retry: 2,
    });
    const { isEnabled } = useEditor(state => ({
        isEnabled: state.options.enabled
    }));
    if (error) {
        return _jsx("div", { children: "error" });
    }
    const list = useMemo(() => {
        const dataList = get(data, 'list', []);
        if (isEnabled && !isEmpty(dataList)) {
            return [dataList[0]];
        }
        return dataList;
    }, [data]);
    const handleTableChange = useImmutableCallback((pagination) => {
        setParams({
            params: Object.assign(Object.assign({}, params), { rows: pagination.pageSize, page: pagination.current })
        });
    });
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
    console.log(134, resultColunms);
    return (_jsx(Spin, { spinning: isLoading, children: _jsx(Table, Object.assign({ pagination: { total: data.total }, rowKey: rowKey, columns: resultColunms, dataSource: list, onChange: handleTableChange }, restProps)) }));
};
export const TableComponent = HOCCodeWrapComponent(TableJsx);
