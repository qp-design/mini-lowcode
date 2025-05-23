import {Container, HOCCodeWrapComponent, useModuleContext} from "@brushes/component-core";
import {RightOutlined} from "@ant-design/icons";
import {createStyles} from "antd-style";
import {ButtonComponent, Text} from '../../basic';
import {Element} from "@craftjs/core";

export const useStyles3 = createStyles(({css, token}) => {
    return {
        promote: css`
            display: flex;
            color: #444;
            justify-content: space-between;
            .tips {
                background: ${token.colorError};
                color: #fff;
                padding: 3px 4px;
                border-radius: 4px;
                letter-spacing: 1px;
                font-size: 12px;
            }
        `
    }
})

const PromotionAction = () => {
    const retry = useModuleContext(s => s.moduleStore.retry);
    const {
        promotionName,
        promotionCode,
        disNextMsg,
        pdCode
    } = useModuleContext(s => s.moduleStore._skuInfo) || {};

    const nextBuyImpl = () => {
        retry({
            orderOpen: true,
            title: '凑单',
            params: {
                promotionCode
            }
        })
    }
    const openImpl = () => {
        retry({
            giftOpen: true,
            title: '赠品',
            params: {
                promotionCode
            }
        })
    }
    if (disNextMsg) {
    return <span>
            {promotionName}
               {disNextMsg}
                <ButtonComponent onClick={nextBuyImpl} icon={<RightOutlined/>} iconPosition={'end'} type={'link'}
                                 text={'去凑单'}/>
           </span>
    }

    if (pdCode === '0001') {
        return <ButtonComponent onClick={openImpl} icon={<RightOutlined/>} iconPosition={'end'} type={'link'} text={'赠品'} />
    }
}

export const PromotionActionComponent = HOCCodeWrapComponent(PromotionAction);

const Promotion = ({padding, margin}: any) => {
    const {styles} = useStyles3();
    const {
        promotionName,
        shoppingCode,
    } = useModuleContext(s => s.moduleStore._skuInfo) || {};

    if (!promotionName) {
        return null;
    }
    return (
        <div style={{...padding, ...margin}} id={shoppingCode}>
            <Element
                id={shoppingCode}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                canvas
                is={Container}
            >
                <Element flexDirection={'row'} alignItems={'center'} canvas is={Container} id={'pdName'}>
                    <div className={styles.promote}>
                        <Text color={'#fff'} className={'tips'} code={'pbName'}/>
                    </div>
                    <Text code={'promotionName'} padding={{paddingLeft: 5}}></Text>
                </Element>
                <PromotionActionComponent/>
            </Element>
        </div>

    )
}

export const CartPromotionComponent = HOCCodeWrapComponent(Promotion)