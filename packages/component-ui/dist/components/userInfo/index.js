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
import { createStyles } from "antd-style";
import { fullpath } from "@brushes/component-tool";
const tabTitle = [
    {
        path: 'car',
        label: "购物车",
        value: "0",
    },
    {
        label: "待发货",
        value: "0",
        status: 1,
    },
    {
        label: "待收货",
        value: "0",
        status: 2,
    },
    {
        label: "交易完成",
        value: "0",
        status: 4,
    },
];
const useStyle = createStyles(({ token, css }) => {
    return {
        tipInfo: css `
        width: 100%;
        height: 190px;
        background: linear-gradient(
                148deg,
                rgba(9, 82, 229, 0.1) 1%,
                rgba(9, 82, 229, 0.03) 103%
        );
        box-sizing: border-box;
        border-radius: 10px;
        padding: 10px 10px 12px 10px;
        .er_img {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            .erweima-svg {
                width: 102px;
                height: 102px;
            }
        }
        .text {
            margin-top: 10px;
            font-family: PingFang SC;
            font-size: 14px;
            font-weight: normal;
            line-height: 24px;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0em;
            font-variation-settings: "opsz" auto;
            color: #7c7c7c;
        }
        .bannerImg{ margin-top: 20px;}
    `,
        commonInfo: css `
                .userInfo {
                    height: 55px;
                    margin-top: 10px;
                    display: flex;
                    .userImg {
                        .img {
                            width: 55px;
                            height: 55px;
                            border-radius: 10px;
                        }
                    }
                    .userInfo_Detail {
                        margin-top: 5px;
                        margin-bottom: 5px;
                        margin-left: 10px;
                        width: 90px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .top {
                            font-family: PingFang SC;
                            font-size: 18px;
                            font-weight: 500;
                            line-height: 22px;
                            letter-spacing: 0em;
                            font-variation-settings: "opsz" auto;
                            color: #232323;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            width: 200px;
                            .name {
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                        .bottom {
                            font-family: PingFang SC;
                            font-size: 12px;
                            font-weight: normal;
                            line-height: 16px;
                            letter-spacing: 0em;
                            font-variation-settings: "opsz" auto;
                            color: #8B8E93;
                            .hover:hover {
                                cursor: pointer;
                                color: ${token.colorPrimary};
                            }
                        }
                    }
                }
                .otherInfo {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-column-gap: 5px;
                    margin: 30px 0 20px;
                    .box {
                        //width: 37px;
                        text-align: center;
                        cursor: pointer;
                    }
                    .top_num {
                        font-size: 20px;
                        font-weight: 500;
                        margin-bottom: 5px;
                    }
                    .bottom_name {
                        font-size: 12px;
                    }
                }
        `
    };
});
export const UserInfo = (_a) => {
    var { text, imgUrl } = _a, restProps = __rest(_a, ["text", "imgUrl"]);
    const { styles } = useStyle();
    return (_jsx("div", { children: _jsx("div", { className: styles.tipInfo, children: _jsxs("div", { className: styles.commonInfo, children: [_jsxs("div", { className: "userInfo", children: [_jsx("div", { className: "userImg", children: _jsx("img", { className: "img", src: fullpath(imgUrl), alt: "" }) }), _jsxs("div", { className: "userInfo_Detail", children: [_jsx("div", { className: "top", children: _jsx("span", { className: "name", children: "\u6635\u79F0" }) }), _jsxs("div", { className: "bottom", children: [_jsx("span", { className: "hover", onClick: () => {
                                                }, children: "\u5207\u6362\u8D26\u53F7" }), _jsx("span", { style: { padding: '0 5px' }, children: "|" }), _jsx("span", { className: "hover", onClick: () => {
                                                }, children: "\u9000\u51FA" })] })] })] }), _jsx("div", { className: "otherInfo", children: tabTitle.map((item, index) => (_jsxs("div", { onClick: () => {
                            }, className: "box navigator", children: [index === 0 && _jsx("div", { className: "top_num", children: "0" }), index !== 0 && _jsx("div", { className: "top_num", children: item.value }), _jsx("div", { className: "bottom_name", children: item.label })] }, "item.label"))) })] }) }) }));
};
