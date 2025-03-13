import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QjIcon } from '@brushes/share-resource';
import { Watermark } from 'antd';
export const DefaultJsx = ({ text = '内容放置区域' }) => {
    return (_jsxs("div", { className: 'default-common', children: [_jsx(QjIcon, { style: {
                    fontSize: 30,
                    fontWeight: 500,
                    display: 'block',
                    color: '#bbb'
                }, name: 'icon-computer' }), _jsx("p", { children: text })] }));
};
export const DefaultEditorBg = ({ content = '/', color = 'blue' }) => {
    return (_jsx(Watermark, { gap: [1, 1], font: { color }, rotate: 0, height: 10, width: 10, content: content, children: _jsx("div", { style: { height: 10 } }) }));
};
