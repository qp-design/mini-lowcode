import {useTableWithSelect} from "@brushes/table"
import {HOCCodeWrapComponent} from "@brushes/core-transform";
import {Container, ModuleProvider, useModuleContext, Element} from "@brushes/component-core";
import {Table} from 'antd';
import {useComponentListData} from "@brushes/component-store-web";
import {useEffect, useMemo} from "react";

const Inner = ({code, record, index} : { code: string; record: any; index: number}) => {
    const setModuleStore = useModuleContext((s) => s.setModuleStore);
    useEffect(() => {
        setModuleStore({
            [code]: record,
            index,
        })
    }, [code, record]);
    return (
        <Element canvas is={Container} id={code}/>
    )
}

const DiyColumnComponent = ({code, record, index} : {code: string; record: object; index: number}) => {
    console.log('index====>', index);
    const store = useModuleContext(s=>s.moduleStore) || {};
    const setModuleStore = useModuleContext(s=>s.setModuleStore);
    return (
        <ModuleProvider moduleStore={{...store, setParentModuleStore: setModuleStore}}>
            <Inner code={code} record={record} index={index}/>
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
                    render: (_: string, record:any, index: number) => <DiyColumnComponent index={index} record={record} code={restProps.value}/>,
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
                expandable={ expandable ? { expandedRowRender: (record, index) => <DiyColumnComponent index={index} record={record} code={'expandable'}/>, defaultExpandedRowKeys: ['0'] } : undefined}
                columns={columnsMix}
                rowSelection={rowSelection}
            />
        </>
    )
}


export const TableComponent = HOCCodeWrapComponent(App)
