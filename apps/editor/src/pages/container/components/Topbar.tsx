import { useEditor } from '@craftjs/core';
import {
  TextField,
} from '@material-ui/core';
import copy from 'copy-to-clipboard';
import lz from 'lzutf8';
import React, { useState, useEffect } from 'react';
import {useSearchParams} from "react-router-dom";
import {Switch, Button, message, Modal, Space, Flex} from 'antd';
import {post} from "@brushes/request";
const baseStyle: React.CSSProperties = {
  background: 'rgba(0,0,0, .05)',
  padding: 10,
  borderRadius: 4,
  marginBottom: 10,
    position: 'relative',
  zIndex: 10000
};

export const Topbar = () => {
  const { actions, query, enabled, canUndo, canRedo } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: state.options.enabled && query.history.canUndo(),
      canRedo: state.options.enabled && query.history.canRedo(),
    })
  );

  const [searchParams,] = useSearchParams();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [stateToLoad, setStateToLoad] = useState('');

  const queryParams = searchParams.get('target');

  useEffect(() => {
    (async () => {
      try {
        if(queryParams) {
          const { modelConfig } = await post('/web/pfs/pfsmodel/getPfsModel.json', {
            modelId: queryParams
          });
          const json = lz.decompress(lz.decodeBase64(modelConfig || 'eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lcldyYXAifSwiaXNDYW52YXMiOnRydWUsInByb3BzxDl3aWR0aCI6IjEwMCIsImhlaWdodCI6MCwiYmFja2dyb3VuZCI6IiMwxwEiLCJjbGFzc8docm9vdC1jyG0iLCJkYXRhLWN50ht9LCJkaXNwbGF59QCjLCJjdXN0b20iOnt9LCJoaWRkZW4iOmZhbHNlLCJub2RlcyI6WyI5MGc4M2h3SDM2Il0sImxpbmtlZE7GHXt9fSwiU0VKZnlTZzJ1cP8BHOkAlP8BGDoyMDAsIm1hcmdpbsRkLCJwYWRkaW5nxw1vc2l0aW9uVmFsdcRr5AC75wFCImF1dG8i7AFHSW1hZ+QAgM0V5AEpZ2JhKDI1NSzIBDApIiwiZmxleERpcmVjxGDEJm93IiwiYWxpZ25JdGVtcyI6ImNlbnT9AVrvAVZwYXJlbuQAm2hlVzRfYkQ5eV/kAfP2AWz1AWDrAYD6AWBPdXT/AWPnAWNwYXJh5ADJxGzpAoc07QKI/wFG/wFG8gFGY29sdW1u8gEz7QC09wE25QNz/wEw7QEwfQ=='));
          actions.deserialize(json);
        }
      } catch (err) {
        console.log(54, err, queryParams);
      }
    })()
  }, [queryParams]);

  return (
    <>
      {contextHolder}
      <Flex justify={'space-between'} style={{...baseStyle}}>
        <Space align="center">
          <Switch
            checkedChildren="启用"
            unCheckedChildren="关闭"
            checked={enabled}
            onChange={(value ) =>
              actions.setOptions((options) => (options.enabled = value))
            }
          />
          <Button
            type="primary"
            ghost
            danger
            disabled={!canUndo}
            onClick={() => actions.history.undo()}
          >
            撤销
          </Button>
          <Button
            type="primary"
            danger
            ghost
            disabled={!canRedo}
            onClick={() => actions.history.redo()}
          >
            重做
          </Button>
        </Space>
        <Space align="center">
          <Button
            type="primary"
            onClick={() => {
              const json = query.serialize();
              copy(lz.encodeBase64(lz.compress(json)));
              messageApi.info('数据复制成功!');
            }}
          >
            复制页面数据
          </Button>
          <Button
            type="primary"
            onClick={() => setDialogOpen(true)}
          >
            加载
          </Button>
          <Button
              color="danger" variant="solid"
              onClick={async () => {
                const json = query.serialize();

                const { msg } = await post('/web/pfs/pfsmodel/updatePfsModel.json', {
                  modelId: queryParams,
                  modelConfig: lz.encodeBase64(lz.compress(json))
                })
                messageApi.success(msg);
              }}
          >
            保存
          </Button>
          <Modal
            width={800}
            destroyOnHidden
            okText={'确定'}
            cancelText={'取消'}
            title="加载数据"
            open={dialogOpen}
            onOk={() => {
              setDialogOpen(false);
              const json = lz.decompress(lz.decodeBase64(stateToLoad));
              actions.deserialize(json);
              messageApi.info('数据加载成功!');
            }}
            onCancel={() => setDialogOpen(false)}
          >
            <div style={{marginTop: 20}}>
              <TextField
                multiline
                fullWidth
                placeholder='粘贴从“复制页面数据”按钮复制的内容'
                size="small"
                // value={stateToLoad || ''}
                onChange={(e) => setStateToLoad(e.target.value)}
              />
            </div>
          </Modal>
        </Space>
      </Flex>
    </>
  );
};
