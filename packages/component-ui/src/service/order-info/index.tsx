import {Container, HOCCodeWrapComponent, Element, useModuleContext} from "@brushes/component-core";
import {Text} from '../../basic'
import {useOrderGood, useOrderInfo} from "component-store";
import {fixPrice} from "@brushes/component-tool";

const OrderInfo = ({storeKey, padding, margin, ...props}:{storeKey: string; padding: object; margin: object}) => {
    useOrderGood(storeKey);
    const { shoppingCountPrice, comDisMoney, goodsCamount } = useOrderInfo();
    const freight = useModuleContext(s=>s.moduleStore._orderAddressInfo.freight);

    return (
        <div style={{...padding, ...margin, ...props}}>
                <Container
                    alignItems={'center'}
                    margin={{marginBottom: 10}}
                    justifyContent={'flex-end'}
                    flexDirection={'row'}
                >
                    <Text color={'#666'} fontSize={14} text={'商品总件数：'}></Text>
                    <Text text={fixPrice(goodsCamount)} textAlign={'right'} width={120} color={'#f00'} code={'totalNum'}></Text>
                </Container>
                <Container
                    alignItems={'center'}
                    margin={{marginBottom: 10}}
                    justifyContent={'flex-end'}
                    flexDirection={'row'}
                >
                    <Text color={'#666'} fontSize={14} text={'商品总金额：'}></Text>
                    <Text text={fixPrice(shoppingCountPrice)} textAlign={'right'} width={120} color={'#f00'} code={'totalNum'}></Text>
                </Container>
                <Container
                    alignItems={'center'}
                    margin={{marginBottom: 10}}
                    justifyContent={'flex-end'}
                    flexDirection={'row'}
                >
                    <Text color={'#666'} fontSize={14} text={'优惠金额：'}></Text>
                    <Text text={fixPrice(comDisMoney)} textAlign={'right'} width={120} color={'#f00'}></Text>
                </Container>
                <Container
                    alignItems={'center'}
                    margin={{marginBottom: 10}}
                    justifyContent={'flex-end'}
                    flexDirection={'row'}
                >
                    <Text color={'#666'} fontSize={14} text={'运费：'}></Text>
                    <Text text={fixPrice(freight)} textAlign={'right'} width={120} color={'#f00'}></Text>
                </Container>
                <Container
                    alignItems={'center'}
                    margin={{marginBottom: 10}}
                    justifyContent={'flex-end'}
                    flexDirection={'row'}
                >
                    <Text color={'#666'} fontSize={14} text={'应付总额：'}></Text>
                    <Text text={fixPrice(freight + shoppingCountPrice)} textAlign={'right'} width={120} color={'#f00'}></Text>
                </Container>
                <Element
                    is={Container}
                    id={'account-info-tips'}
                    margin={{marginBottom: 10}}
                    justifyContent={'flex-end'}
                    flexDirection={'row'}
                >
                    <Text
                        fontSize={12}
                        color={'#999'}
                        text={'(使用优惠后，商品优惠后单价之和可能与总价产生尾差，结算金额以付款时最终总价为准。)'}></Text>
                </Element>
        </div>
    )
}

export const OrderInfoComponent = HOCCodeWrapComponent(OrderInfo);