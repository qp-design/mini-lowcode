import React, {useState, useRef} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Divider, Input, Select, Space, Button} from 'antd';
import type {InputRef} from 'antd';

let index = 0;

export const ApiComponent = ({onChange, ...props}: { onChange: (e: any) => void; }) => {
    const [items, setItems] = useState([
        {
            value: '/web/um/userDealer/saveUserDealerToAllot.json',
            label: '注册接口'
        },
        {
            value: '/web/rs/rsGoodsClass/queryGoodsClassTreeForBusStr.json',
            label: 'B2B商品分类'
        },
        {
            value: '/web/upm/upmupoints/queryUpmupointsListPageByUser.json',
            label: '积分列表'
        },
        {
            value: '/web/upm/upmupoints/queryUpmupointsPageByPC.json',
            label: '用户积分余额'
        },
        {
            value: '/web/oc/contract/cancelContractC.json',
            label: '取消订单'
        },
        {
            value: '/web/oc/contract/confirmReceive.json',
            label: '确认收货'
        },
        {
            value: 'web/um/memoauth/updateMemoauth.json',
            label: '大宗委托平台交易更新'
        },
        {
            value: 'web/oc/refund/sendGoods.json',
            label: '退单快递提交'
        },
        {
            value: 'web/oc/refund/saveRefundForPlat.json',
            label: '订单售后接口'
        },
        {
            value: 'web/inv/invlist/getInvlistOrd.json',
            label: '发票订单详情'
        },
        {
            value: 'web/inv/invlist/queryInvlistPageTowap.json',
            label: '我的发票'
        },
        {
            value: 'web/inv/userinv/checkVATowap.json',
            label: '增值税发票验证'
        },
        {
            value: 'web/inv/userinv/deleteUserinv.json',
            label: '删除发票'
        },
        {
            value: 'web/inv/invlist/queryContractPage.json',
            label: '开具发票列表'
        },
        {
            value: 'web/inv/invlist/saveInvlist.json',
            label: '开票接口'
        },
        {
            value: 'web/inv/userinv/updateUserinv.json',
            label: '编辑发票'
        },
        {
            value: 'web/inv/userinv/getUserinv.json',
            label: '发票明细'
        },
        {
            value: 'web/inv/userinv/saveUserinv.json',
            label: '新增发票'
        },
        {
            value: 'web/inv/userinv/queryUserinvPageByByMemberCode.json',
            label: '发票信息列表'
        },
        {
            value: 'web/res/evaluate/saveEvaluateGoods.json',
            label: '商品评价'
        },
        {
            value: 'web/at/auction/getMyAuctionInfo.json',
            label: '大宗我的竞价详情'
        },
        {
            value: 'web/at/auction/getAuctionByCode.json',
            label: '大宗竞价出价明细'
        },
        {
            value: 'web/at/auctionEnroll/queryMyAuctionEnroll.json',
            label: '大宗我的竞价列表'
        },
        {
            value: 'web/um/userserviceinfo/getUserinfoDearler.json',
            label: '大宗检测用户状态'
        },
        {
            value: 'web/at/auctiondt/saveAuctiondtBatch.json',
            label: '大宗报名支付'
        },
        {
            value: 'web/at/auctiondt/getAuctiondtAndAmount.json',
            label: '大宗获取用户的账号余额'
        },
        {
            value: '/web/at/auctiondt/queryCurrentAuctiondtPage.json',
            label: '大宗查询当前报名保证金所缴列表'
        },
        {
            value: 'web/um/memoauth/saveMemoauth.json',
            label: '大宗委托平台交易申请'
        },
        {
            value: 'web/um/userservice/saveUserinfoapplyForModify.json',
            label: '大宗个人资料编辑'
        },
        {
            value: 'web/at/auction/queryAuctionPage.json',
            label: '竞价专区查询'
        },
        {
            value: 'web/at/auction/getAuctionNotice.json',
            label: '竞价专区详情'
        },
        {
            value: '/web/at/auction/getAtAuctionGinfoListByAuctionId.json',
            label: '竞价专区详情包裹列表'
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
            value: '/web/eq/eqAuctionEnroll/updateEqAuctionEnrollState.json?oldDataState=1&newDataState=-1',
            label: '取消询价单'
        },
        {
            value: '/web/eq/eqAuctionEnroll/updateEqAuctionEnrollState.json?oldDataState=0&newDataState=1',
            label: '发送询价单'
        },
        {
            value: '/web/eq/auction/updateEqAuctionEnroll.json?dataOpbillstate=2',
            label: '拒绝报价单'
        },
        {
            value: 'web/eq/eqAuctionEnroll/queryEqAuctionEnrollPage.json',
            label: '询价单查询'
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
            value: 'web/sc/shopde/queryShopdePage.json',
            label: '店铺列表'
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
        },
        {
            value: 'web/um/sign/querySignPage.json',
            label: '积分列表'
        },
        {
            value: 'web/at/auctionWin/getAuctionWinByCode.json',
            label: '我的报告书'
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