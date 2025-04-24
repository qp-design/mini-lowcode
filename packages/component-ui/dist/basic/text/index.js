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
import { useNode } from "@craftjs/core";
export const Text = (_a) => {
    var { text } = _a, restProps = __rest(_a, ["text"]);
    const { connectors: { connect, drag }, } = useNode();
    return (_jsx("div", { ref: (ref) => connect(drag(ref)), style: Object.assign({ width: '100%' }, restProps
        // textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
        ), children: text }));
};
