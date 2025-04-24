import React, {useState, useRef} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Divider, Input, Select, Space, Button} from 'antd';
import type {InputRef} from 'antd';

let index = 0;

export const ApiComponent = ({onChange, ...props}: { onChange: (e: any) => void; }) => {
    const [items, setItems] = useState([
        {
            api: 'web/oc/contract/queryOcContractPageForRetailer.json?childFlag=true',
            name: 'b2b订单查询'
        },
        {
            api: 'web/es/searchengine/find.json',
            name: 'b2b商品查询'
        },
        {
            api: 'web/rs/resourceGoods/getResourceGoodsInfoBySkuCode.json',
            name: 'b2b商品详情搜索'
        },
        {
            api: 'web/oc/shopping/queryShoppingPage.json',
            name: '购物车查询'
        },
        {
            api: 'web/pm/promotionplat/queryPromotionRsSkuPag.json',
            name: '凑单列表'
        },
        {
            api: 'web/um/address/saveAddress.json',
            name: '保存地址'
        },
        {
            api: 'web/pm/promotionDiscount/queryPromotionDiscountPage.json',
            name: '赠品查询'
        },
        {
            api: 'web/um/address/queryAddressBymerberCode.json',
            name: '地址查询'
        },
        {
            api: 'web/oc/shopping/queryShoppingToContract.json',
            name: '确定订单页面查询'
        },
    ]);
    const [name, setName] = useState('');

    const inputRef = useRef<InputRef>(null);

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        setItems([...items, {
            name: name || `New item ${index++}`,
            api: name || `New item ${index++}`
        }]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    return (
        <Select
            allowClear
            {...props}
            onChange={onChange}
            style={{marginBottom: 20}}
            placeholder="选择数据源"
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Divider style={{margin: '8px 0'}}/>
                    <Space style={{padding: '0 8px 4px'}}>
                        <Input
                            placeholder="Please enter item"
                            ref={inputRef}
                            onChange={onNameChange}
                            onKeyDown={(e) => e.stopPropagation()}
                        />
                        <Button type="text" icon={<PlusOutlined/>} onClick={addItem}>
                            Add item
                        </Button>
                    </Space>
                </>
            )}
            options={items.map((item) =>
                ({label: item.name, value: item.api}))}
        />
    );
};