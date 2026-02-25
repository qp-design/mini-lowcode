import {TextField} from "@material-ui/core";
import {message, Modal} from "antd";
import {Dispatch, useState} from "react";

export const ModelJsx = ({callback, setDialogOpen, dialogOpen} : {callback: (e:any) => void; dialogOpen: boolean; setDialogOpen: Dispatch<boolean>}) => {
    const [node, setNode] = useState(null);

    return (
        <Modal
            width={800}
            destroyOnHidden
            okText={'确定'}
            cancelText={'取消'}
            title="目标父容器"
            open={dialogOpen}
            onOk={() => {
                callback(node);
                message.info('数据复制成功!');
            }}
            onCancel={() => setDialogOpen(false)}
        >
            <div style={{marginTop: 20}}>
                <TextField
                    multiline
                    fullWidth
                    placeholder='复制组件'
                    size="small"
                    // value={stateToLoad || ''}
                    onChange={(e) => setNode(e.target.value)}
                />
            </div>
        </Modal>
    )
}