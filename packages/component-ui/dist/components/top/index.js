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
import { line } from '../../icon';
import { fullpath } from '@brushes/component-tool';
const useStyle = createStyles(({ token, css }) => {
    return {
        wrap: css `
            width: 100%;
            height: 34px;
            opacity: 1;
            background: #F4F4F4;
        `,
        container: css `
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: normal;
            letter-spacing: 0em;
            height: 34px;
            color: #232323;
            max-width: 1200px;
            margin: 0 auto;
            justify-content: space-between;
        `,
        left: css `
            .logon{ cursor: pointer }
            display: flex;
            span{ padding: 0 5px;}
        `,
        right: css `
                display: flex;
                align-items: center;

                ul {
                    display: flex;
                    list-style: none;
                    li {
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        :hover {
                            color: #0952E5;
                        }
                        .icon-prev{ padding-right: 9px;}
                        span {
                            padding: 0 20px;
                        }
                    }
                }

                .tel {
                    padding-left: 20px;
                    display: flex;
                    align-items: center;
                    span {
                        padding-left: 9px;
                    }
                }
        `
    };
});
export const Top = (_a) => {
    var { navigator, tel, loginOut, user, menu = [] } = _a, restProps = __rest(_a, ["navigator", "tel", "loginOut", "user", "menu"]);
    const { styles } = useStyle();
    return (_jsx("div", { className: styles.wrap, children: _jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.left, children: ["\u60A8\u597D\uFF01", user, "\u6B22\u8FCE\u6765\u5230\u94C1\u4EBF ", _jsx("span", { children: "|" }), _jsx("div", { className: "logon", onClick: loginOut, children: "\u9000\u51FA" })] }), _jsx("div", { className: styles.right, children: _jsx("ul", { children: menu.map((item, index) => (_jsxs("li", { children: [_jsxs("span", { onClick: () => navigator(item), children: [item.imgUrl && _jsx("img", { className: "icon-prev", height: "14", src: fullpath(item.imgUrl) }), item.title] }), menu.length - 1 !== index && _jsx("img", { width: "1", height: "12", src: line })] }, index))) }) })] }) }));
};
