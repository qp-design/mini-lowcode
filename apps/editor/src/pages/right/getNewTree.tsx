
export const duplicateNode = (nodeTree: any) => {
    // 创建新ID映射
    const newNodes = {};

    const createNewIds = (node) => {
        const newNodeId = `${node.id}_copy_${Date.now()}`;
        newNodes[node.id] = newNodeId;

        // 递归处理子节点
        node.nodes.forEach(childId => {
            const childNode = nodeTree.nodes[childId];
            createNewIds(childNode);
        });
    };

    createNewIds(nodeTree.nodes[nodeId]);

    // 克隆节点数据
    const clonedNodeTree = JSON.parse(JSON.stringify(nodeTree));
    const rootNode = clonedNodeTree.nodes[nodeId];

    // 更新所有ID
    const updateNodeIds = (node) => {
        const oldId = node.id;
        const newId = newNodes[oldId];

        node.id = newId;
        node.data.props = { ...node.data.props }; // 确保props是新对象

        // 更新子节点引用
        node.nodes = node.nodes.map(childId => newNodes[childId]);

        // 递归更新子节点
        node.nodes.forEach(childId => {
            const childNode = clonedNodeTree.nodes[childId];
            updateNodeIds(childNode);
        });
    };

    updateNodeIds(rootNode);

    // 添加到父节点
    const parentNode = query.node(rootNode.data.parent).get();
    actions.addNodeTree(rootNode, parentNode.id);
};