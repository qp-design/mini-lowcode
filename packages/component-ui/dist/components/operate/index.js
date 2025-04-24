import { jsx as _jsx } from "react/jsx-runtime";
import { Space } from 'antd';
export const OperateJsx = () => {
    const clickImpl = (e) => {
        e.preventDefault();
        console.log(10, e.target.dataset.link);
        history.pushState(null, '', e.target.dataset.link);
    };
    const buttonAList = [
        {
            name: '编辑',
            link: '/b2b-bus-pc-saas?menuAction=platDistributeSkuList&first-level=b2b0805001002063&second-level=0805001002002063#/platDistributeSkuEdit'
        },
        {
            name: '查看营销',
        },
        {
            name: '查看链接',
        }
    ];
    return (_jsx(Space, { size: "middle", children: buttonAList.map(item => _jsx("a", { "data-link": item.link, onClick: clickImpl, children: item.name })) }));
};
