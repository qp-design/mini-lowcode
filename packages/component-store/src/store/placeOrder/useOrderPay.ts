import {get, set} from 'lodash-es';
import {useState} from 'react';
import {useModuleContext, initialValueOrder} from "@brushes/component-core";
import {saveContract} from "qj-b2c-api";
import {message} from 'antd';
import {useNavigate} from 'react-router-dom';
import {useSearchParamHook} from "../../utils";
import {useGetCarNum} from "../../store";
import {post} from "@brushes/request";

export function useOrderPay() {
    const navigator = useNavigate();
    const [shoppingGoodsIdStr] = useSearchParamHook(['shoppingGoodsIdStr']);
    const {getGoodsList} = useGetCarNum()
    const [loading, setLoading] = useState(false);
    const _orderDomainStr = useModuleContext(s => s.moduleStore._orderDomainStr); //订单信息
    const _ocContractSettlList = useModuleContext(s => s.moduleStore._ocContractSettlList); // 优惠信息
    const _orderAddressInfo = useModuleContext(s => s.moduleStore._orderAddressInfo); //地址信息
    const _contractGoodsList = useModuleContext(s => s.moduleStore._contractGoodsList); //订单商品信息
    const _payMoney = useModuleContext(s => s.moduleStore._payMoney);
    // 参数数据处理
    const paramsDataHandle = (appendParams: object) => {
        const {goodsReceiptArrdess, goodsReceiptMem, goodsReceiptPhone, areaCode} = _orderAddressInfo;
        return _orderDomainStr.map((item: typeof initialValueOrder, index: number) => {
            return {
                // contractPaytime: new Date().valueOf(),
                // goodsPbillno: 0, // 成团人数 $storage.get('PeopleNum') || 0
                // goodsPmbillno: item.promotionCodes, // 团购 平团  描述营销单号
                contractProperty: '0', //订单性质
                contractBlance: 0, //结算方式:全款、订金、融资
                contractPmode: 0, //付款方式：场内、场外，即线上、线下
                contractPumode: '0', //提货方式
                goodsSupplierName: '', //配送商
                goodsSupplierCode: '', //配送商Code
                packageList: [
                    {
                        contractGoodsList: _contractGoodsList[index],
                        shoppingGoodsIdList: (_contractGoodsList[index] || []).map((item: any) => item.shoppingGoodsId),
                        promotionCode: item.promotionCode,
                        packageRemark: null
                    }
                ],
                packageMode: '', //配送方式
                contractType: item.shoppingType,
                ocContractSettlList: [], // 优惠信息
                // contractInmoney: salesTax(item), //  销售含税金额 (优惠前)
                // contractMoney: finalSales(item), // 最终销售含税金额 (优惠后)
                goodsReceiptMem, //收货人
                goodsReceiptPhone, //收货联系方式
                goodsReceiptArrdess, // 地址 省市区 加详细地址
                areaCode, //从地址上面带过来`
                contractNbillcode: null,
                ...appendParams,
                // skuIdList: isGoodDetailToAccount
                //   ? [
                //       {
                //         skuId: _location.skuId,
                //         goodsNum: _location.goodsNum
                //       }
                //     ]
                //   : [],
                // giftSkuIdList: []
            };
        });
    };

    // 最终销售含税金额 (优惠后)
    const finalSales = (item: typeof initialValueOrder) => {
        const {shoppingCountPrice, copyComDisMoney, discount} = item;
        return (shoppingCountPrice - copyComDisMoney - discount).toFixed(2);
    };

    //  销售含税金额 (优惠前)
    const salesTax = (item: typeof initialValueOrder) => {
        const {shoppingCountPrice, copyComDisMoney} = item;
        return (shoppingCountPrice - copyComDisMoney).toFixed(2);
    };

    // 确认预订单 立即支付
    const onSubmit = async (cb: () => void, value: any) => {
        cb();
        const rsSkuListStr = paramsDataHandle(value);
        // 优惠信息
        const settleList = _ocContractSettlList.map((item: typeof initialValueOrder) => {
            return {
                ...item,
                contractPmode: value.contractPmode,
            }
        });
        set(rsSkuListStr, '[0].ocContractSettlList', settleList);
        setLoading(true);
        const params = {orderDomainStr: JSON.stringify(rsSkuListStr)};
        try {
            const res = await saveContract(params);
            const {contractBillcode, contractBbillcode} = get(res, 'dataObj', {
                contractBillcode: '',
                contractBbillcode: ''
            });
            if (shoppingGoodsIdStr) {
                getGoodsList();
            }
            if (value.contractPmode + '' === '1' || value.creditType == '100' || _payMoney === 0) {
                navigator(`/result?contractBillcode=${contractBillcode}`, {replace: true})
            } else {
                const {dataObj} = await post('web/oc/contract/syncContractState.json', {
                    contractBillcode,
                })
                navigator(`/pay?contractBillcode=${dataObj.contractBillcode}`)
            }
        } catch (err: any) {
            message.error(err.msg || '获取订单失败');
        } finally {
            setLoading(false);
        }
    };

    return {
        onSubmit,
        loading
    };
}
