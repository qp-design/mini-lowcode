import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from 'antd';
export const SlotEmpty = ({ children, borderColor }) => {
    return (_jsx("div", { style: {
            height: '100%',
            width: '100%',
            borderColor,
            borderWidth: 1,
            borderStyle: 'dashed',
            fontSize: 12,
            textAlign: 'center',
            fontWeight: 'normal',
            background: 'rgba(255,255,255, 0.2)'
        }, children: _jsx(Typography.Text, { type: "secondary", children: children }) }));
};
SlotEmpty.defaultProps = {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    children: '当前为插槽容器，可以自定义组件代码。'
};
