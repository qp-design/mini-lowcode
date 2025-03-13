import {ApplicationContext, Container, HOCCodeWrapComponent} from '@brushes/component-core';
import React, {ForwardedRef, useMemo} from 'react';
import {Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {get, isEmpty} from 'lodash-es';
import {useStore} from 'component-store';
import {Element, useEditor} from '@craftjs/core';
import {has} from 'lodash-es';

const TableJsx =
    React.forwardRef((
        {columns = [], rowKey = 'id', ...restProps}: {
            rowKey: string;
            columns: ColumnsType<any>;
        }, ref: ForwardedRef<HTMLDivElement>) => {
        const [queryApi] = useStore(store => store['queryApi']);

        return (
            <div ref={ref}>
                {
                    !isEmpty(columns) && queryApi ?
                        <TableCom queryApi={queryApi} rowKey={rowKey} columns={columns} {...restProps}/>
                        :
                        <Table columns={columns} dataSource={[]}/>
                }
            </div>
        )
    })

const TableCom =
    ({columns, queryApi, rowKey = 'id', ...restProps}: {
        queryApi: string;
        rowKey: string;
        columns: ColumnsType<any>;
    }) => {
        const data = {}
        const {isEnabled} = useEditor(state => ({
            isEnabled: state.options.enabled
        }));

        const list = useMemo(() => {
            const dataList = get(data, 'list', []);
            if(isEnabled && !isEmpty(dataList)) {
                return [dataList[0]]
            }
            return dataList
        }, [data]);

        const resultColunms = useMemo(() => {
            return columns.map(item => {
                const isSlot = has(item, 'type');
                if (isSlot) {
                    return {
                        ...item,
                        render(_, context, idx) {
                            return (
                                <ApplicationContext value={context}>
                                    <Element
                                        canvas
                                        id={item.key}
                                        custom={{
                                            key: idx,
                                        }}
                                        is={Container}
                                    >
                                    </Element>
                                </ApplicationContext>
                            )
                        }
                    }
                }
                return item;
            })
        }, [columns])

        console.log(134, resultColunms);
        return (
            <Table
                pagination={{total: 0}}
                rowKey={rowKey}
                columns={resultColunms}
                dataSource={list}
                onChange={() => {}}
                {...restProps}/>
        )
    }

export const TableComponent = HOCCodeWrapComponent(TableJsx)
