import {useEffect, useState} from "react";
import {DynamicForm, FieldType, submitFunType} from "@brushes/form";
import { transformSubmitDataConfig } from './config'
import {post} from "@brushes/request";
import TableComponent from "./config/table";
import {HOCCodeWrapComponent} from "@brushes/core-transform";
import { message} from "antd";
import {useOrderNum} from "component-store";
import {useModuleContext} from "@brushes/component-core";

type DynamicFormProps = Array<FieldType>;

const RefundJsx = ({openKey, callbackName, formConfig = []}: {openKey: string; formConfig: DynamicFormProps; callbackName: string}) => {
    const contractBillcode = useModuleContext(s => s.moduleStore.contractBillcode);
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    const retry = useModuleContext(s=>s.moduleStore[callbackName]);
    const { getOrderBadge } = useOrderNum()

    const onSubmit : submitFunType = async (value, suc, error) => {
        try {
            let goodsNum = 0;
            value.ocRefundGoodsBeanList = value.ocRefundGoodsBeanList.map((item:any) => {
                goodsNum+=item.goodsCamount;
                return item;
            })
            const { msg } = await post('web/oc/refund/saveRefundForPlat.json', {
                params: JSON.stringify({
                    goodsNum,
                    contractBillcode,
                    ...value
                })
            });
            message.success(msg);
            suc();
            setTimeout(() => {
                setModuleStore({
                    [openKey]: false,
                })
                retry();
                getOrderBadge();
            }, 200)
        } catch (err) {
            error(err);
        }


    }

    return (
        <DynamicForm
            name={'refundBasic'}
            transformSubmitDataConfig={transformSubmitDataConfig}
            layout={'vertical'}
            onSubmit={onSubmit}
            saveText={'保存'}
            fields={formConfig}
        />
    )
}

export const RefundBasicComponent = HOCCodeWrapComponent(RefundJsx)

const TableComplex = () => {
    const form = useModuleContext(s=>s.moduleStore.form);
    const onChange = useModuleContext(s=>s.moduleStore.onChange);
    return <TableComponent onChange={onChange} form={form}/>
}
export const RefundTableComponent = HOCCodeWrapComponent(TableComplex)