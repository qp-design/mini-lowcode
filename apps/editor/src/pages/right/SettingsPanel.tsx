import {useEditor} from '@craftjs/core';
import {Button, Row, Col, Typography, Tag, message, Tooltip} from 'antd';
import React, {useRef} from 'react';
import {getNode, resetNode, setNode} from "@/module";
import {isEmpty} from "lodash";

export const SettingsPanel = () => {
    const postType = useRef(0);
    const {
        actions: {delete: deleteAction, addNodeTree, add},
        selected,
        isEnabled,
        query: {node, createNode}
    } = useEditor((state, query) => {
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
        postType.current = 1;
        const nodeTree = node(selected.id).toNodeTree();
        setNode(nodeTree);
    }

    const singleCopyImpl = () => {
        postType.current = 2;
        const { data: { type, props}} = node(selected.id).get();
        setNode(createNode(React.createElement(type, props)));
    }

    const pasterImpl = () => {
        const node = getNode();
        if (!isEmpty(node)) {
            if(postType.current === 1) {
                addNodeTree(node, selected.id)
            } else {
                add(node, selected.id)
            }
            resetNode()
        } else {
            message.info('先复制组件')
        }
    }
    return isEnabled && selected ? (
        <Row>
            <Col span={12}>
                <Typography.Title level={5}>选中的组件</Typography.Title>
            </Col>
            <Col style={{textAlign: "right"}} span={12}>
                <Tag color="#1677ff">{selected.node.displayName}</Tag>
                <Tag color="#1677ff">{selected.name}</Tag>
            </Col>
            <Col span={24}>
                <div style={{marginTop: 10}}>
                    {selected.settings && React.createElement(selected.settings)}
                </div>
            </Col>
            <Tooltip title="隔离复制">
                <Button
                    type="default"
                    style={{width: '48%', marginLeft: '4%', marginTop: 15}}
                    onClick={singleCopyImpl}
                >
                    单个复制
                </Button>
            </Tooltip>
            <Tooltip title="复制的模块，改了一起变">
                <Button
                    type="default"
                    style={{width: '44%', marginLeft: '4%', marginTop: 15}}
                    onClick={copyImpl}
                >
                    批量复制
                </Button>
            </Tooltip>
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
                            console.log(111, selected.id);
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
