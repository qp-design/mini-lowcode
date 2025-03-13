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
//@ts-nocheck
import { MenuOutlined } from '@ant-design/icons';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy, } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useEffect, useState } from 'react';
import { Table, Popconfirm, Button } from 'antd';
const Row = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging, } = useSortable({
        id: props['data-row-key'],
    });
    const style = Object.assign(Object.assign(Object.assign({}, props.style), { transform: CSS.Transform.toString(transform && Object.assign(Object.assign({}, transform), { scaleY: 1 })), transition }), (isDragging ? { position: 'relative', zIndex: 9999 } : {}));
    return (_jsx("tr", Object.assign({}, props, { ref: setNodeRef, style: style }, attributes, { children: React.Children.map(children, (child) => {
            if (child.key === 'sort') {
                return React.cloneElement(child, {
                    children: (_jsx(MenuOutlined, Object.assign({ ref: setActivatorNodeRef, style: { touchAction: 'none', cursor: 'move' } }, listeners))),
                });
            }
            return child;
        }) })));
};
const App = ({ onChange, column }) => {
    const [dataSource, setDataSource] = useState(column);
    useEffect(() => {
        setDataSource(column);
    }, [column]);
    useEffect(() => {
        onChange(dataSource);
    }, [dataSource]);
    const columns = [
        {
            key: 'sort',
            title: '排序',
            align: 'center',
            width: 35,
        },
        {
            width: 110,
            title: '字段名称',
            dataIndex: 'label',
        },
        {
            width: 50,
            title: '操作',
            dataIndex: 'action',
            align: 'center',
            render: (text, record) => {
                return (_jsx(Popconfirm, { title: "Sure to delete?", onConfirm: () => handleDelete(record.name), children: _jsx(Button, { type: 'link', children: "\u5220\u9664" }) }));
            }
        }
    ];
    const handleDelete = (name) => {
        const newData = dataSource.filter((item) => item.name !== name);
        setDataSource(newData);
    };
    const onDragEnd = ({ active, over }) => {
        if (active.id !== (over === null || over === void 0 ? void 0 : over.id)) {
            setDataSource((previous) => {
                const activeIndex = previous.findIndex((i) => i.name === active.id);
                const overIndex = previous.findIndex((i) => i.name === (over === null || over === void 0 ? void 0 : over.id));
                return arrayMove(previous, activeIndex, overIndex);
            });
        }
    };
    return (_jsx(DndContext, { modifiers: [restrictToVerticalAxis], onDragEnd: onDragEnd, children: _jsx(SortableContext
        // rowKey array
        , { 
            // rowKey array
            items: dataSource.map((i) => i.name), strategy: verticalListSortingStrategy, children: _jsx(Table, { pagination: false, size: 'small', components: {
                    body: {
                        row: Row,
                    },
                }, scroll: { y: 200 }, rowKey: "name", columns: columns, dataSource: dataSource }) }) }));
};
export default App;
