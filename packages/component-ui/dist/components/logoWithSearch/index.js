var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createStyles } from 'antd-style';
import { fullpath } from "@brushes/component-tool";
import Search from "antd/es/input/Search";
import { SearchOutlined } from '@ant-design/icons';
const useStyle = createStyles(({ token, css }) => {
    return {
        headerScoped: css `
            width: 1200px;
            margin: 40px auto 0;
            display: grid;
            grid-column-gap: 32px;
            grid-template-columns: 220px 1fr 120px;

            .logo {
                cursor: pointer
            }
            .ant-input-search .ant-input-affix-wrapper{
                height: 42px;
                line-height: 42px;
                font-size: 14px;
                border: solid 2px ${token.colorPrimary};
                border-radius: 10px 0 0 10px !important
            }
            .ant-input-group-addon {
                background: ${token.colorPrimary};
                border: solid 2px ${token.colorPrimary};
                color: #fff;
                border-radius: 0 10px 10px 0;
                padding: 0;
                width: 80px;
                text-align: center;
                cursor: pointer;
                button{
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0em;
                }
            }

            .search-box {
                display: grid;
                position: relative;
                grid-template-columns: 28px 1fr;
                width: 120px;
                height: 42px;
                padding: 10px;
                border-radius: 8px;
                align-items: center;
                box-sizing: border-box;
                border: 1px solid${token.colorPrimary};
                color: ${token.colorPrimary};
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                position: relative;

                .tip {
                    position: absolute;
                    right: -10px;
                    top: -10px;
                    background: #FF0C00;
                    width: 27px;
                    height: 18px;
                    text-align: center;
                    color: #fff;
                    border-radius: 10px;
                }
            }

            .menu {
                cursor: pointer;
                font-weight: 500;
                font-size: 18px;
                display: flex;
                justify-content: space-between;
                width: 690px;
                margin-top: 18px;
            }

            .menu-body {
                min-height: 40px;

                ul {
                    margin-bottom: 10px;
                }
            }

            .main-cate {
                margin-top: 22px;
                padding-left: 20px;
                font-size: 18px;
                font-weight: 500;
                display: flex;
                align-items: center
            }
        `
    };
});
export const LogoWithSearch = (_a) => {
    var { navigator, tel, loginOut, user, logo = {}, car = {}, count = [] } = _a, restProps = __rest(_a, ["navigator", "tel", "loginOut", "user", "logo", "car", "count"]);
    console.log(107, logo, restProps);
    const { styles } = useStyle();
    return (_jsxs("div", { className: styles.headerScoped, children: [_jsx("div", { className: "logo", children: _jsx("img", { onClick: navigator, src: fullpath(logo.imgUrl), alt: "logo", width: "219", height: "60" }) }), _jsx("div", { className: "search", children: _jsx(Search, { prefix: _jsx(SearchOutlined, { style: { color: 'rgba(0,0,0,.25)' } }), placeholder: "\u8BF7\u8F93\u5165\u54C1\u724C/\u89C4\u683C/\u4EA7\u5730/\u7B49\u5173\u952E\u5B57", allowClear: true, enterButton: "\u641C\u7D22", size: "large", onSearch: () => { } }) }), _jsxs("div", { className: "search-box", onClick: navigator, children: [_jsx("span", { className: "tip", children: count }), _jsx("img", { src: fullpath(car.imgUrl), width: "18", height: "18" }), _jsx("span", { children: "\u6211\u7684\u8D2D\u7269\u8F66" })] })] }));
};
