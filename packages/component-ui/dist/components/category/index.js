import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RightOutlined } from "@ant-design/icons";
import { createStyles } from "antd-style";
const apiData = [
    '办公用品',
    '工作台',
    '户外运动',
    '电脑外设＆数码产品',
    '电脑外设及耗材',
    '通讯设备',
    '电脑及配件',
    '办公日用',
    '办公家具',
    '办公设备'
];
const useStyles = createStyles(({ token, css }) => {
    return {
        category: css `
            position: relative;
            z-index: 9;
            width: 232px;
            height: 420px;
            padding: 10px 5px;
            border-radius: 10px;
            opacity: 1;
            background: #F8FAFF;
            box-sizing: border-box;
            li {
                cursor: pointer;
                height: 40px;
                line-height: 40px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 18px;
                font-size: 14px;
                color: #666;
            }
        `
    };
});
export const Category = ({ width, height }) => {
    const { styles } = useStyles();
    return (_jsx("div", { className: styles.category, children: _jsx("ul", { children: apiData.map((item, index) => (_jsxs("li", { children: [item, _jsx(RightOutlined, { style: { opacity: .8, fontSize: 12 } })] }, index))) }) }));
};
