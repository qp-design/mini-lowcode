import {Fragment, useState} from "react";
import {fixPrice} from "@brushes/component-tool";
import {Text} from '../../basic';
import {useComponentListData, useGetCarNum} from "component-store";
import {Container, ModuleProvider, Element, useModuleContext} from "@brushes/component-core";
import { HOCCodeWrapComponent } from "@brushes/core-transform";
import {CardLRComponent} from '../cardLR'
import {Button, Checkbox, Empty, InputNumber, message, Popconfirm, Spin} from "antd";
import {debounce} from "lodash";
import {post} from "@brushes/request";
import {DeleteOutlined} from "@ant-design/icons";
import {useNode} from "@craftjs/core";

const InputJsx = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { goodsCamount = 1, shoppingGoodsId } = useModuleContext(s => s.moduleStore._skuInfo) || { goodsCamount: 1};
    const retry = useModuleContext(s=> s.moduleStore.retry);
    const updateNum = debounce(async (e: number) => {
        setLoading(true);
        const {msg} = await post('web/oc/shopping/updateShoppingGoodsNum.json', {
            shoppingGoodsId: shoppingGoodsId,
            amount: e,
            goodWeight: 0,
        })
        message.success(msg);
        retry()
        setLoading(false);
    }, 500)

    return (
        <Spin spinning={loading}>
            <InputNumber onChange={updateNum} value={goodsCamount}/>
        </Spin>
    )
}

export const InputNumberComponent = HOCCodeWrapComponent(InputJsx);

export const DeleteHandlerComponent = () => {
    const { getGoodsList } = useGetCarNum();
    const [loading, setLoading] = useState(false);
    const retry = useModuleContext(s=> s.moduleStore.retry);
    const { shoppingGoodsId } = useModuleContext(s => s.moduleStore._skuInfo) || { shoppingGoodsId: ''};

    const {
        connectors: {connect, drag},
    } = useNode();

    const deleteImpl = debounce(async () => {
        setLoading(true);
        const {msg} = await post('web/oc/shopping/deleteShoppingGoods.json', {
            shoppingGoodsId
        })
        message.success(msg);
        retry();
        setLoading(false);
        await getGoodsList();
    }, 500)

    return (
        <div ref={(ref: HTMLDivElement) => connect(drag(ref))}>
            <Popconfirm
                title="删除"
                description="确定删除所选商品?"
                onConfirm={deleteImpl}
            >
                <div>
                    <Spin spinning={loading}>
                        <Button size={'large'} danger type={'link'} icon={<DeleteOutlined/>}></Button>
                    </Spin>
                </div>
            </Popconfirm>
        </div>
    )
}

const MergePrice = ({price = 'pricesetNprice', amount = 'goodsCamount'}: {price: string; amount: string}) => {
    const item = useModuleContext(s=>s.moduleStore._skuInfo) || {};
    return (
        <span style={{
            fontSize: 14,
            fontWeight: 500
        }}>{fixPrice(item[price] * item[amount])}</span>
    )
}

export const MultiplyPrice = HOCCodeWrapComponent(MergePrice)
// export const DeleteHandlerComponent = HOCCodeWrapComponent(DeleteHandler);

export const ShoppGoodItem = ({item}: { item: any; }) => {
    return (
        <Element
            alignItems={'center'}
            flexDirection={'row'}
            canvas
            is={Container}
            id={'canvas'}
        >
            <Element
                width={30}
                alignItems={'center'}
                padding={{paddingLeft: 5, paddingRight: 5, paddingBottom: 5, paddingTop: 5}}
                canvas
                id="card-larc"
                is={Container}>
                <OperateComponent {...item}/>
            </Element>
            <Element
                width={340}
                alignItems={'center'}
                padding={{paddingLeft: 5, paddingRight: 5, paddingBottom: 5, paddingTop: 5}}
                canvas
                id="card-larc"
                is={Container}>
                <CardLRComponent height={100}/>
            </Element>

            <Element
                canvas
                width={220}
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
            <Element
                width={220}
                alignItems={'center'}
                canvas
                id="card-goodCamount"
                is={Container}>
                <InputNumberComponent/>
            </Element>
            <Element
                canvas
                width={220}
                id={item.goodsCode}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'row'}
                is={Container}
            >
                <Text text={'￥'} fontSize={12} color={'#f00'}/>
                <MultiplyPrice/>
            </Element>
            <Element
                canvas
                width={220}
                id={'pricesetNprice'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'row'}
                is={Container}
            >
                <DeleteHandlerComponent/>
            </Element>
        </Element>
    )
}

const OperateJsx = () => {
    const item = useModuleContext(s=>s.moduleStore._skuInfo) || {};
    const retry = useModuleContext(s => s.moduleStore.retry);
    const [loading , setLoading] = useState(false);
    const updateSelect = debounce(async (e: any) => {
        setLoading(true);
        const {msg} = await post('web/oc/shopping/updateShoppingGoodsCheckState.json', {
            shoppingGoodsIdStr: item.shoppingGoodsId,
            shoppingCode: item.shoppingCode,
            checkState: e.target.checked ? 0 : 1
        })
        message.success(msg);
        retry();
        setLoading(false);
    }, 500)

    return (
        <Spin spinning={loading}>
            <Checkbox disabled={item.dataState !== 0} checked={!item.shoppingGoodsCheck && item.dataState === 0} onChange={updateSelect}></Checkbox>
        </Spin>
    )
}


export const OperateComponent = HOCCodeWrapComponent(OperateJsx);

const ShoppGood = ({shoppingGoodsList, callbackName}: any) => {
    const retry = useModuleContext(s => s.moduleStore[callbackName]);
    return (
        <>
            {
                shoppingGoodsList.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <ModuleProvider moduleStore={{_skuInfo: item, retry}}>
                                <ShoppGoodItem item={item}/>
                            </ModuleProvider>
                        </Fragment>
                    )
                })
            }
        </>
    )
}


const OrderItem = ({dataPath, storeKey, callbackName, hidden, description}: any) => {
    const list = useComponentListData(dataPath, storeKey);
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    if(list.length === 0) {
        return (
            <div style={{padding: '5px 0 5px 0'}}><Empty
                description={description}/></div>
        )
    }
    return (
        <div style={{padding: 5}}>
            {
                list.map((item) => (
                    <Fragment key={item.memberCcode}>
                        <ModuleProvider moduleStore={{_skuInfo: item}}>
                            <Element canvas is={Container} id={'member-cname'}>
                                <Text fontSize={14} code={'memberCname'} padding={{paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10}}></Text>
                            </Element>
                        </ModuleProvider>
                        <Fragment key={item.memberCcode}>
                            {
                                item.shoppingpackageList.map((c: any, index: number) => (
                                    <Fragment key={c.shoppingpackgeCode}>
                                        <ModuleProvider moduleStore={{_skuInfo:c, retry: setModuleStore}}>
                                            { hidden ? null : <Element text={'促销模块内容区域'} canvas is={Container} id={'promotionCode'}></Element> }
                                        </ModuleProvider>
                                        <ShoppGood callbackName={callbackName} shoppingGoodsList={c.shoppingGoodsList}/>
                                    </Fragment>
                                ))
                            }
                        </Fragment>
                    </Fragment>
                ))
            }
        </div>
    )
}

export const OrderItemComponent = HOCCodeWrapComponent(OrderItem)
