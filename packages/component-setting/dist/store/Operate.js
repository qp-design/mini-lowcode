import { jsx as _jsx } from "react/jsx-runtime";
import { Space } from 'antd';
export const OperateJsx = ({ buttonList }) => {
    const clickImpl = (e) => {
        e.preventDefault();
        console.log(10, e.target.dataset.link);
        history.pushState(null, '', e.target.dataset.link);
    };
    return (_jsx(Space, { size: "middle", children: buttonList.map(item => _jsx("a", { "data-link": item.link, onClick: clickImpl, children: item.name })) }));
};
