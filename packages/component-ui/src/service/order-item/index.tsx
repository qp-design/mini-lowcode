import {Fragment, useState} from "react";
import {fixPrice} from "@brushes/component-tool";
import {Text} from '../../basic';
import {useComponentListData} from "component-store";
import {Container, HOCCodeWrapComponent, ModuleProvider, Element, useModuleContext} from "@brushes/component-core";
import ComponentList from '../../../src'
import {Checkbox, InputNumber, message, Spin} from "antd";
import {debounce} from "lodash-es";
import {post} from "@brushes/request";

const InputJsx = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { goodsCamount = 1, shoppingGoodsId } = useModuleContext(s => s.moduleStore.skuInfo) || { goodsCamount: 1};
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

const ShoppGoodItem = ({item}: { item: any; }) => {
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
                <ComponentList.CardLRComponent height={100}/>
            </Element>

            <Element
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
                {/*<Text fontSize={14} fontWeight={500} textAlign={'center'} code={'goodsCamount'}/>*/}
            </Element>
            <Element
                width={220}
                id={'pricesetNprice'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'row'}
                is={Container}
            >
                <Text text={'￥'} fontSize={12} color={'#f00'}/>
                <span style={{
                    color: '#f00',
                    fontSize: 14,
                    fontWeight: 500
                }}>{fixPrice(item.pricesetNprice * item.goodsCamount)}</span>
            </Element>
        </Element>
    )
}

const OperateJsx = () => {
    const item = useModuleContext(s=>s.moduleStore.skuInfo) || {};
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
            <Checkbox checked={!item.shoppingGoodsCheck && item.dataState === 0} onChange={updateSelect}></Checkbox>
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
                            <ModuleProvider moduleStore={{skuInfo: item, retry}}>
                                <ShoppGoodItem item={item}/>
                            </ModuleProvider>
                        </Fragment>
                    )
                })
            }
        </>
    )
}


const OrderItem = ({dataPath, storeKey, callbackName}: any) => {
    const list = useComponentListData(dataPath, storeKey);
    return (
        <div style={{padding: 5}}>
            {
                list.map((item) => (
                    <Fragment key={item.channelCode}>
                        {
                            item.shoppingpackageList.map((c: any, index: number) => (
                                <Fragment key={c.shoppingpackgeCode}>
                                    <ShoppGood callbackName={callbackName} shoppingGoodsList={c.shoppingGoodsList}/>
                                </Fragment>
                            ))
                        }
                    </Fragment>
                ))
            }
        </div>
    )
}

export const OrderItemComponent = HOCCodeWrapComponent(OrderItem)
