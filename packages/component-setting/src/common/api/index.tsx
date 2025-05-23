import React, {useState, useRef} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Divider, Input, Select, Space, Button} from 'antd';
import type {InputRef} from 'antd';

let index = 0;

export const ApiComponent = ({onChange, ...props}: { onChange: (e: any) => void; }) => {
    const [items, setItems] = useState([
                    {
                        value: 'web/oc/contract/queryContractPageC.json',
                        label: 'b2b订单查询'
                    },
                    {
                        value: 'web/rs/resourceGoods/getResourceGoodsInfoBySkuCode.json',
                        label: 'b2b商品详情搜索'
                    },
                    {
                        value: 'web/rs/rsGoodsClass/queryGoodsClassTreeForBusStr.json',
                        label: '分类搜索'
                    },
                    {
                        value: 'web/pte/ptfpmode/queryPtfpmodesToStr.json',
                        label: '确定订单页面支付方式'
                    },
                    {
                        value: 'web/oc/contract/syncContractPayState.json',
                        label: '支付结果页订单状态'
                    },
                    {
                        value: 'web/pte/pay/saveOrderToPay.json',
                        label: '支付页面支付方式'
                    },
                    {
                        value: 'web/oc/contract/syncContractState.json',
                        label: '获取支付状态'
                    },
                    {
                        value: 'web/oc/refund/queryRefundPageBuy.json',
                        label: 'b2b售后列表'
                    },
                    {
                        value: 'web/es/searchengine/find.json',
                        label: 'b2b商品查询'
                    },
                    {
                        value: 'web/oc/shopping/queryShoppingPage.json',
                        label: '购物车查询'
                    },
                    {
                        value: 'web/pm/promotionplat/queryPromotionRsSkuPag.json',
                        label: '凑单列表'
                    },
                    {
                        value: 'web/um/address/saveAddress.json',
                        label: '保存地址'
                    },
                    {
                        value: 'web/pm/promotionDiscount/queryPromotionDiscountPage.json',
                        label: '赠品查询'
                    },
                    {
                        value: 'web/um/address/queryAddressBymerberCode.json',
                        label: '地址查询'
                    },
                    {
                        value: 'web/oc/shopping/queryShoppingToContract.json',
                        label: '确定订单页面查询'
                    },
                    {
                        value: 'web/oc/contract/saveContract.json',
                        label: '保存订单'
                    },
                    {
                        value: 'web/oc/contract/getContractByCode.json',
                        label: '订单明细'
                    }
                ]);
    const [name, setName] = useState('');

    const inputRef = useRef<InputRef>(null);

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        setItems([...items, {
            label: name || `New item ${index++}`,
            value: name || `New item ${index++}`
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
            popupRender={(menu) => (
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
            options={items}
        />
    );
};