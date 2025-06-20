import {useComponentListData, useOrderNum} from "component-store";
import {Fragment, useEffect, useRef} from "react";
import {Container, Element, HOCCodeWrapComponent, ModuleProvider, useModuleContext} from "@brushes/component-core";
import {Text} from "../../basic";
import {CardLRComponent} from "../../service";
import {TableAction, StatusOperate, ModalJsx} from "./component";
import {createStyles} from "antd-style";
import {fixPrice, contractTypeFn, contractPmodeFn, dataStateFn, useNavigateImpl} from "@brushes/component-tool";
import {cancelContractC, confirmReceive} from "component-api";
import {Empty, message} from "antd";
import {get} from "lodash-es";

const ShoppGoodItem2 = () => {
    return (
        <Element
            alignItems={'center'}
            flexDirection={'row'}
            canvas
            is={Container}
            id={'canvas_container'}
        >
            <Element
                width={300}
                alignItems={'center'}
                padding={{paddingLeft: 5, paddingRight: 5, paddingBottom: 5, paddingTop: 5}}
                canvas
                id="card-larc"
                is={Container}>
                <CardLRComponent height={100}/>
            </Element>

            <Element
                canvas
                width={100}
                id={'price-title'}
                alignItems={'center'}
                justifyContent={'center'}
                is={Container}
                flexDirection={'row'}
            >
                <Text text={'￥'} color={'#f00'} fontSize={12}/>
                <Text text={'￥'} color={'#f00'} fontSize={14} fontWeight={500} code={'pricesetNprice'}/>
                <Text color={'#666'} fontWeight={500} text={' / '}/>
                <Text text={'￥'} color={'#666'} fontWeight={500} code={'partsnameWeightunit'}/>
            </Element>
        </Element>
    )
}

const useStyles = createStyles(({token, css}) => {
    return {
        wrap: css`
            padding: 5px 0;
            .right-content {
                display: grid;
                font-size: 12px;
                align-items: center;
                grid-template-columns: repeat(4, 1fr);
                width: 760px;
                text-align: center;

                .padding-5 {
                    padding-bottom: 5px;
                }

                .action {
                    display: flex;
                    flex-direction: column;

                    button {
                        font-size: 12px;
                    }
                }
            }
        `
    }
})


export const OldItemInfo = ({record, callbackName, expressKey, refundKey}: { refundKey: string; expressKey: string;record: any; callbackName: string }) => {
    const {navigator} = useNavigateImpl();
    const moduleRef = useRef(null);
    const retry = useModuleContext(s => s.moduleStore[callbackName]);
    const { getOrderBadge } = useOrderNum();
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    const cancelImpl = async (contractId: string) => {
        const {msg} = await cancelContractC({contractId});
        message.success(msg);
        setTimeout(() => {
            retry();
            getOrderBadge();
        }, 200)
    }

    const confirmReceiveImpl = async (contractBillcode: string) => {
        const {msg} = await confirmReceive({contractBillcode});
        message.success(msg);
        setTimeout(() => {
            retry();
            getOrderBadge();
        }, 200)
    }

    const expressImpl = (contractBillcode: string) => {
        setModuleStore({
            [expressKey]: true,
            contractBillcode
        })
    }

    const refundImpl = (contractBillcode: string, dataState: number) => {
        setModuleStore({
            [refundKey]: true,
            dataState,
            contractBillcode
        })
        // moduleRef.current!.init(contractBillcode, true)
    }
    
    const onClick = (code: string, record: {contractBillcode: string; contractId: string; dataState: number}) => {
        switch (code) {
            case 'pay':
                navigator(`/pay?contractBillcode=${record.contractBillcode}`)
                break
            case 'refund':
                refundImpl(record.contractBillcode, record.dataState);
                break;
            case 'see':
                navigator(`/userCenter/orderDetail?contractBillcode=${record.contractBillcode}`)
                break;
            case 'express':
                expressImpl(record.contractBillcode);
                break;
            case 'confirmReceive':
                confirmReceiveImpl(record.contractBillcode);
                break;
            case 'cancel':
                cancelImpl(record.contractId);
                break;
        }
    }

    return (
        <>
            <div className={'right-content'}>
                <div>{fixPrice(record.dataBmoney)}</div>
                <div>
                    <div className={'padding-5'}>订单类型：{contractTypeFn(record.contractType)}</div>
                    <div>付款类型：{contractPmodeFn(record.contractPmode)}</div>
                </div>
                <div>
                    {dataStateFn(record.dataState)}
                </div>
                <div>
                    <TableAction onClick={onClick} direction={'vertical'} record={record} buttonList={
                        [
                            {
                                name: '查看',
                                code: 'see',
                            },
                            {
                                dataState: ['0', '30', '1', '19'],
                                name: '取消',
                                code: 'cancel',
                                render: StatusOperate
                            },
                            {
                                name: '立即支付',
                                code: 'pay',
                                dataState: '1',
                            },
                            {
                                dataState: '3',
                                code: 'express',
                                name: '查看物流',
                            },
                            {
                                dataState: '3',
                                code: 'confirmReceive',
                                name: '确认收货',
                                render: StatusOperate
                            },
                            {
                                dataState: ['2', '3'],
                                code: 'refund',
                                // return item.goodsList.some(goods=>(goods.goodsCamount-goods.contractGoodsArefnum) > 0)
                                name: '申请退单',
                            },
                        ]
                    }/>
                </div>
            </div>
            <ModalJsx ref={moduleRef}/>
        </>
    )
}
export const ShopItemGoodInnerJsx = ({dataPath, item}: any) => {
    const list = get(item, dataPath, []);
    return (
        <>
            {
                (list || []).map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <ModuleProvider moduleStore={{_skuInfo: item}}>
                                <ShoppGoodItem2/>
                            </ModuleProvider>
                        </Fragment>
                    )
                })
            }
        </>
    )
}

export const OrderTitle = ({item}:any) => {
    return (
        <ModuleProvider moduleStore={{_skuInfo: item}}>
            <Element flexDirection={'row'} is={Container} canvas id={'item-contractBillcode'}>
                <Text fontSize={12} text={'订单号：'}></Text>
                <Text module={'moduleStore'} code={'contractBillcode'}></Text>
            </Element>
            <Element justifyContent='flex-end' flexDirection={'row'} is={Container} canvas
                     id={'shop-item-good-code'}>
                <Text fontSize={12} text={'下单时间：'}></Text>
                <Text transformData={'time'} format={'YYYY-MM-DD hh:mm:ss'}  module={'moduleStore'} code={'contractPaydate'}></Text>
            </Element>
        </ModuleProvider>
    )
}

const ShoppItemGood = ({
                           callbackName,
                           description,
                           dataPath,
                           storeKey,
                           expressKey,
                           refundKey,
                           padding,
                           margin,
                           borderRadius
                       }: any) => {
    const list = useComponentListData(dataPath, storeKey);
    const {styles} = useStyles();
    if (!list.length) {
        return <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            padding: 30,
            ...margin
        }}><Empty description={description}/></div>;
    }
    return (
        <div className={styles.wrap}>
            {
                list.map((item, index) => {
                    return (
                        <Fragment key={item.contractBillcode}>
                            <div
                                style={{
                                    padding:'5px 10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems:'center'
                            }}>
                                <OrderTitle item={item}/>
                            </div>
                            <div className={'item-wrap'} style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                ...margin,
                                ...padding,
                                borderRadius

                            }}>
                                <div style={{width: 400}}>
                                    <ShopItemGoodInnerJsx dataPath={'goodsList'} item={item}/>
                                </div>
                                <OldItemInfo refundKey={refundKey} expressKey={expressKey} record={item} callbackName={callbackName}/>
                            </div>
                        </Fragment>
                    )
                })
            }

        </div>
    )
}

export const OrderItemGood = HOCCodeWrapComponent(ShoppItemGood);


{/*<Element*/
}
{/*    canvas*/
}
{/*    id={'shop-item-good'}*/
}
{/*    is={Container}*/
}
{/*    flexDirection={'row'}*/
}
{/*    justifyContent={'space-between'}*/
}
{/*    padding={{paddingLeft: 10, paddingRight: 10, paddingBottom: 5, paddingTop: 5}}*/
}
{/*    alignItems={'center'}*/
}
{/*>*/
}
{/*    <Element is={Container} canvas id={'shop-item-good-type'}>*/
}
{/*        <Element flexDirection={'row'} is={Container} canvas id={'shop-item-good-code'}>*/
}
{/*            <Text text={'订单类型：'}></Text>*/
}
{/*            <Text code={'contractBillcode'}></Text>*/
}
{/*        </Element>*/
}
{/*        <Element flexDirection={'row'} is={Container} canvas id={'shop-item-good-code'}>*/
}
{/*            <Text text={'付款类型：'}></Text>*/
}
{/*            <Text code={'contractBillcode'}></Text>*/
}
{/*        </Element>*/
}
{/*    </Element>*/
}
{/*    <Element justifyContent={'center'} is={Container} canvas id={'shop-item-good-type'}>*/
}
{/*        <Text code={'contractBillcode'}></Text>*/
}
{/*    </Element>*/
}
{/*    <Element justifyContent={'center'} is={Container} canvas id={'shop-item-good-code'}>*/
}

{/*    </Element>*/
}
{/*</Element>*/
}
