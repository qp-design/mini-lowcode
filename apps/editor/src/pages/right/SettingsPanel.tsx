import {useEditor} from '@craftjs/core';
import {Button, Row, Col, Typography, Tag} from 'antd';
import React from 'react';
import {getNode, setNode} from "@/module";

export const SettingsPanel = () => {
  const {actions: { add, delete : deleteAction }, selected, isEnabled, query: { createNode, node }} = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;
    if (currentNodeId) {
      selected = {
        node: state.nodes[currentNodeId].data,
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  const copyImpl = () => {
      const { data: { type, props}} = node(selected.id).get();
      setNode(createNode(React.createElement(type, props)));
  }

  const pasterImpl = () => {
      const node = getNode();
      add(node, selected.id)
  }

  return isEnabled && selected ? (
    <Row>
      <Col span={12}>
        <Typography.Title level={5}>选中的组件</Typography.Title>
      </Col>
      <Col style={{textAlign: "right"}} span={12}>
        <Tag color="#1677ff">{selected.name}</Tag>
      </Col>
      <Col span={24}>
        <div style={{marginTop: 10}}>
          {selected.settings && React.createElement(selected.settings)}
        </div>
      </Col>
        <Button
            type="default"
            style={{width: '48%', marginTop: 15}}
            onClick={copyImpl}
        >
            复制组件
        </Button>
        <Button
            type="primary"
            ghost
            style={{width: '48%', marginLeft: '4%', marginTop: 15}}
            onClick={pasterImpl}
        >
            粘贴组件
        </Button>
      {selected.isDeletable ? (
          <>
              <Button
                  type="primary"
                  style={{width: '100%', marginTop: 15}}
                  onClick={() => {
                      deleteAction(selected.id);
                  }}
              >
                  删除组件
              </Button>
          </>

      ) : null}
    </Row>
  ) : null;
};
