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
            value: 'web/oc/shopping/querySkuToContract.json',
            label: '报价单转订单'
        },
        {
            value: '/web/eq/auction/updateEqAuctionEnroll.json?dataOpbillstate=5',
            label: '接受报价单'
        },
        {
            value: '/web/eq/auction/updateEqAuctionEnroll.json?dataOpbillstate=2',
            label: '拒绝报价单'
        },
        {
            value: 'web/eq/auction/queryEqAuctionList.json',
            label: '报价单查询'
        },
        {
            value: 'web/eq/eqAuctionEnroll/readEqAuctionEnroll.json',
            label: '报价单详情'
        },
        {
          value: 'web/um/collect/checkCollectExit.json',
          label: '检查是否收藏'
        },
        {
            value: 'web/um/collect/saveCollect.json',
            label: '收藏'
        },
        {
            value: '/web/um/userserviceinfo/queryUserinfoDetail.json',
            label: '店铺查看资质'
        },
        {
            value: 'web/sc/shopde/queryShopdeByMerchant.json',
            label: '店铺查询'
        },
        {
          value: 'web/cms/doclist/queryDoclistForMenuPageAt.json',
          label: '新闻资讯'
        },
        {
          value: 'web/cms/doclist/getDoclistForAt.json',
          label: '新闻资讯明细'
        },
        {
          value: 'web/pm/usercoupon/queryUsercouponPageForC.json',
          label: '我的优惠券'
        },
        {
            value: 'web/gd/rsinfo/queryRsinfoPageByForPcAt.json',
            label: '供求大厅查询'
        },
        {
          value: 'web/cs/Consult/queryConsultPageByOpCode.json',
          label: '咨询列表'
        },
        {
          value: 'web/pm/promotion/queryCouponListBySkuCode.json',
          label: '商品详情优惠券'
        },
        {
            value: 'web/cs/Consult/saveConsult.json',
            label: '保存咨询'
        },
        {
            value: 'web/gd/rsinfo/getRsinfo.json',
            label: '求购信息详情'
        },
        {
            value: 'web/gd/rsinfo/updateRsinfoStateToReSubmit.json',
            label: '更新供求信息'
        },
        {
            value: 'web/gd/rsinfo/queryRsinfoPageByMem.json',
            label: '查询供求信息'
        },
        {
            value: 'web/gd/rsinfo/saveRsinfoByJson.json',
            label: '新增供求信息'
        },
        {
            value: 'web/gd/rsinfo/deleteRsinfo.json',
            label: '删除供求信息'
        },
        {
            value: 'web/oc/shopping/updateShoppingGoodsPmInfo.json',
            label: '更新营销'
        },
        {
            value: 'web/crp/CrpUrechargelist/queryCrpUrechargelistPage.json',
            label: '授信账户'
        },
        {
            value: 'web/reb/upoints/queryUpointsListPage.json',
            label: '返利账户'
        },
        {
            value: 'web/vd/vdfaccountouter/queryAccountOuterDtForUser.json',
            label: '预存款列表'
        },
        {
            value: 'web/vd/vdfaccountouter/queryUserAccount.json',
            label: '我的账户'
        },
        {
            value: 'web/pm/promotion/getPromotionByCode.json',
            label: '单个活动明细'
        },
        {
            value: 'web/pm/promotion/queryPromotionListByGoodsCode.json',
            label: '营销活动列表'
        },
        {
            value: '/web/um/userservice/updateUserPaywd.json',
            label: '修改支付密码'
        },
        {
            value: 'web/es/searchengine/findGoodsForLowCode.json',
            label: '单个促销活动商品列表'
        },
        {
            value: 'web/oc/refund/res.json',
            label: '撤销申请'
        },
        {
            value: 'web/um/userservice/updateUserPhoneByUserPhone.json',
            label: '修改手机号'
        },
        {
            value: 'web/um/userservice/updateUserpsw.json',
            label: '修改密码'
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
            label: '单个支付结果页订单状态'
        },
        {
            value: 'web/oc/contract/syncContractBatchPayState.json',
            label: '批量支付结果页订单状态'
        },
        {
            value: 'web/pte/pay/saveOrderToBatchPay.json',
            label: '支付批次支付方式'
        },
        {
            value: 'web/pte/pay/saveOrderToPay.json',
            label: '支付单个支付方式'
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
            label: '购物车到确定订单查询'
        },
        {
            value: 'web/oc/shopping/queryToContract.json',
            label: '立即购买到确定订单查询'
        },
        {
            value: 'web/oc/contract/saveContract.json',
            label: '保存订单'
        },
        {
            value: 'web/oc/refund/getRefund.json',
            label: '售后明细'
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
            showSearch
            optionFilterProp="label"
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