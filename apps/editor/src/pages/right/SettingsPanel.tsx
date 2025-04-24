import {useEditor} from '@craftjs/core';
import {Button, Row, Col, Typography, Tag} from 'antd';
import React from 'react';

export const SettingsPanel = () => {
  const {actions, selected, isEnabled} = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;

    if (currentNodeId) {
      selected = {
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
      {selected.isDeletable ? (
        <Button
          type="primary"
          style={{width: '100%'}}
          onClick={() => {
            actions.delete(selected.id);
          }}
        >
          删除改组件
        </Button>
      ) : null}
    </Row>
  ) : null;
};
