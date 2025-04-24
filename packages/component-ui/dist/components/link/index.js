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
import { fullpath } from "@brushes/component-tool";
import { createStyles } from 'antd-style';
const useStyle = createStyles(({ token, css }) => {
    return {
        link: css `
            display: flex;
            align-items: center;
            color: ${token.colorPrimary};
        `
    };
});
export const Link = (_a) => {
    var { image, text } = _a, props = __rest(_a, ["image", "text"]);
    const { styles } = useStyle();
    return (_jsxs("div", { className: styles.link, style: props, onClick: () => { }, children: [_jsx("span", { className: "tip", children: text }), _jsx("img", { src: fullpath(image.imgUrl), width: "18", height: "18" })] }));
};
