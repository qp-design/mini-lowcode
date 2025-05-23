import {Modal} from "antd";
import {forwardRef, useImperativeHandle, useState} from "react";
import {DynamicForm, submitFunType} from "@brushes/form";
import { orderItemConfig } from '../config'
import {post} from "@brushes/request";

export const ModalJsx = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [res, setRes] = useState({});

    const init = async (contractBillcode: string, flag: boolean) => {
        setOpen(flag);
        setLoading(true)
        const data = await post('web/oc/contract/getContractByCode.json', { contractBillcode });
        setRes(data);
        setLoading(false);
    }


    useImperativeHandle(ref, () => {
        return {
            init,
        };
      }, []);

    const onSubmit : submitFunType = (value, suc, error) => {
        console.log(28, value, )
        suc();
    }


    return (
        <Modal
            width={800}
            title={<h1 style={{fontSize: 18, marginBottom: 20, textAlign: "center"}}>申请售后</h1>}
            loading={loading}
            footer={null}
            open={open}
            onCancel={() => setOpen(false)}
        >
            { !loading && <DynamicForm
                labelCol={{ span: 3 }}
                initialValues={res}
                wrapperCol={{ span: 21 }}
                onSubmit={onSubmit}
                saveText={'保存'}
                fields={orderItemConfig}
            /> }
        </Modal>
    )
})