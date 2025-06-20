import {FormInstance, Table} from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import {useEffect, useMemo, useState} from "react";
import {CardLRComponent} from "../../../service";
import {dynamicFormFields} from "@brushes/form";
import {Container, Element, ModuleProvider, useModuleContext} from "@brushes/component-core";

interface DataType {
    key: React.Key;
    goodsName: string;
    goodsCamount: number;
    contractGoodsArefnum: number;
    contractGoodsGtype: string;
    skuNo: string
}


const TableComponent: React.FC<{form: FormInstance, onChange: (e:any) => void}> = ({form, onChange}) => {
    const [dataSource, setDataSource] = useState<DataType[]>([]);
    const [selectedRowKeys, setSelectedRowsKeys] = useState<React.Key[]>([]);

    const dataState = useModuleContext(s=>s.moduleStore.dataState);
    useEffect(() => {
        const refundType = form.getFieldValue('refundType');
        const list = form.getFieldValue('goodsList');
        let result = list;
        if(refundType === 'B01' && dataState === 3) {
            result = list.filter((c: any)=>!c.contractGoodsSendnum)
        } else if(refundType === 'B02' && dataState === 3) {
            result = list.filter((c:any)=>c.contractGoodsSendnum>0)
        }
        setSelectedRowsKeys([]);
        setDataSource(result);
    }, [form.getFieldValue('refundType')]);

    const columns: TableColumnsType<DataType> = useMemo(() => [
        {
            title: '商品信息',
            dataIndex: 'name',
            width: 300,
            render: (text: string, record) => {
                return (
                    <ModuleProvider moduleStore={{_skuInfo: record}}>
                        <CardLRComponent height={100}/>
                    </ModuleProvider>
                )
            },
        },
        {
            title: '下单数量',
            width: 100,
            align: 'center',
            dataIndex: 'goodsCamount',
        },
        {
            title: '商品总价',
            width: 100,
            align: 'center',
            dataIndex: 'contractGoodsMoney',
        },
        {
            title: '商品单价',
            width: 100,
            align: 'center',
            dataIndex: 'pricesetNprice',
        },
        {
            title: '单位',
            width: 80,
            align: 'center',
            dataIndex: 'partsnameNumunit',
        },
        {
            title: '售后数量',
            width: 120,
            align: 'center',
            dataIndex: 'refundGoodsNum',
            render(_, record: DataType, ind: number) {
                const isRequired = selectedRowKeys.includes(record.skuNo);
                return (
                    <>
                        {
                            record.goodsCamount - record.contractGoodsArefnum === 0 || record.contractGoodsGtype === '1' ?
                                record.goodsCamount - record.contractGoodsArefnum : dynamicFormFields([
                                {
                                    type: 'number',
                                    rules: [{required: isRequired, message: '必填项'}],
                                    name: ['ocRefundGoodsBeanList', ind, 'refundGoodsNum'],
                                    extraProps: {
                                        onChange(value) {
                                            const result = form.getFieldValue('ocRefundGoodsBeanList');
                                            const n = result.map(item => {
                                                if(item.skuNo === record.skuNo) {
                                                    item.refundGoodsNum = value;
                                                }
                                                return item;
                                            })
                                            onChange(n);
                                        },
                                        max: record.goodsCamount - record.contractGoodsArefnum,
                                        min: 1,
                                    }
                                },
                            ], form)
                        }
                    </>
                )
            },
        },
    ], [selectedRowKeys]);

    const rowSelection: TableProps<DataType>['rowSelection'] = {
        selectedRowKeys,
        onChange: (newSelectedRowKeys: React.Key[]) => {
            setSelectedRowsKeys(newSelectedRowKeys);
            const values = form.getFieldValue('ocRefundGoodsBeanList');
            const res = values.map((item:any) => ({
                ...item,
                checked: newSelectedRowKeys.includes(item.skuNo),
            }))
            onChange(res);
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.goodsCamount - record.contractGoodsArefnum === 0 || record.contractGoodsGtype === '1', // Column configuration not to be checked
            name: record.goodsName,
        }),
    };

    return (
        <Table<DataType>
            pagination={false}
            rowKey={'skuNo'}
            scroll={{ x: 'max-content' }}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
        />
    );
};

export default TableComponent;