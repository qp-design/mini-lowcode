import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
let index = 0;
const ApiComponent = ({ onChange, value }) => {
    const [items, setItems] = useState([
        {
            api: 'web/oc/contract/queryOcContractPageForRetailer.json?childFlag=true',
            name: 'b2b订单查询'
        },
        {
            api: 'web/rs/resourceBase/queryRsSkuPageForRetGoods.json',
            name: 'b2b商品查询'
        }
    ]);
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, {
                name: name || `New item ${index++}`,
                api: name || `New item ${index++}`
            }]);
        setName('');
        setTimeout(() => {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }, 0);
    };
    return (_jsx(Select, { value: value, onChange: onChange, style: { marginBottom: 20 }, placeholder: "\u9009\u62E9\u6570\u636E\u6E90", dropdownRender: (menu) => (_jsxs(_Fragment, { children: [menu, _jsx(Divider, { style: { margin: '8px 0' } }), _jsxs(Space, { style: { padding: '0 8px 4px' }, children: [_jsx(Input, { placeholder: "Please enter item", ref: inputRef, value: value, onChange: onNameChange, onKeyDown: (e) => e.stopPropagation() }), _jsx(Button, { type: "text", icon: _jsx(PlusOutlined, {}), onClick: addItem, children: "Add item" })] })] })), options: items.map((item) => ({ label: item.name, value: item.api })) }));
};
export default ApiComponent;
