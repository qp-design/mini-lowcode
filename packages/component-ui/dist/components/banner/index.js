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
import { jsx as _jsx } from "react/jsx-runtime";
import { Carousel, Image } from 'antd';
import { fullpath } from "@brushes/component-tool";
export const Banner = (_a) => {
    var { menu } = _a, restProps = __rest(_a, ["menu"]);
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (_jsx("div", { children: _jsx(Carousel, { afterChange: onChange, children: menu.map((item, index) => (_jsx("h3", { children: _jsx(Image, { preview: false, style: Object.assign(Object.assign({}, restProps), { overflow: 'hidden' }), src: fullpath(item.imgUrl) }) }, index))) }) }));
};
