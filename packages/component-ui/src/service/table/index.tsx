import {useTableWithSelect} from "@brushes/table"
import {HOCCodeWrapComponent} from "@brushes/core-transform";
import {Container, ModuleProvider, useModuleContext, Element} from "@brushes/component-core";
import {Table} from 'antd';
import {useComponentListData} from "@brushes/component-store-web";
import {useEffect, useMemo} from "react";

const Inner = ({code, record} : { code: string; record: any}) => {
    const setModuleStore = useModuleContext((s) => s.setModuleStore);
    useEffect(() => {
        setModuleStore({
            [code]: record
        })
    }, [code, record]);
    return (
        <Element canvas is={Container} id={code}/>
    )
}

const DiyColumnComponent = ({code, record} : {code: string; record: object}) => {
    const store = useModuleContext(s=>s.moduleStore) || {};
    const setModuleStore = useModuleContext(s=>s.setModuleStore);
    return (
        <ModuleProvider moduleStore={{...store, setParentModuleStore: setModuleStore}}>
            <Inner code={code} record={record}/>
        </ModuleProvider>
    )
}

const App = ({dataPath = '', expandable = false, height, type, ROWKEYY, columns, storeKey, rowSelectKey, ...restProps}: {
    storeKey: string;
    expandable?: boolean;
    dataPath?: string;
    type?: "checkbox" | 'radio' | ''
    rowSelectKey?: string;
    height?: number;
    columns: Array<any>;
    ROWKEYY: string
}) => {
    const onChange = useModuleContext(s => s.moduleStore.onChange);

    const list = useComponentListData(dataPath, storeKey);

    const {
        rowSelection,
    } = useTableWithSelect(ROWKEYY, (value: Array<any>) => {
        if(type) {
            onChange(value);
            // setModuleStore({
            //     [rowSelectKey]: value
            // })
        }
    }, type);

    useEffect(() => {
        if(!type && onChange) {
            onChange(list);
        }
    }, [type, list]);

    const columnsMix = useMemo(() => {
        return columns.map(({type, ...restProps}) => {
            const config = {
                title: restProps.title,
                align: restProps.align || 'left',
                dataIndex: restProps.value,
                width: restProps.width,
            }
            if (type && restProps.value) {
                return {
                    ...config,
                    render: (_: string, record) => <DiyColumnComponent record={record} code={restProps.value}/>,
                }
            } else {
                return config
            }
        })
    }, [columns]);

    return (
        <>
            <Table
                {...restProps}
                dataSource={list}
                pagination={false}
                rowKey={ROWKEYY}
                scroll={ height ? {y: height} : {}}
                expandable={ expandable ? { expandedRowRender: (record) => <DiyColumnComponent record={record} code={'expandable'}/>, defaultExpandedRowKeys: ['0'] } : undefined}
                columns={columnsMix}
                rowSelection={rowSelection}
            />
        </>
    )
}


export const TableComponent = HOCCodeWrapComponent(App)
