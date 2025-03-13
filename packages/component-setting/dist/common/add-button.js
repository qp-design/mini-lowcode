import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from 'antd';
import { QjIcon } from '@brushes/share-resource';
export const AddButton = ({ add, title = '添加链接', type = 'primary' }) => {
    return (_jsx(Button, { block: true, icon: _jsx(QjIcon, { style: { fontSize: 14, fontWeight: 500, color: '#aaa' }, name: 'icon-zengjia' }), onClick: add, style: {
            marginBottom: 24
        }, type: type, children: title }));
};
export default AddButton;
