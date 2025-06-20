import {Container, HOCCodeWrapComponent, useModuleContext, Element, useEditor, createStyles} from "@brushes/component-core";
import {useEffect, useState} from "react";
import {post} from "@brushes/request";
import {isEmpty} from "lodash-es";

export const useStyles = createStyles(({ token, css }) => {
    return {
        content: css`
            .title{ 
                color: ${token.colorPrimary};
                display: flex;
                align-items: center;
                justify-items: flex-start;
            }
        `
    }
});

const CouponService = ({padding, margin, formItemCode, dataPath = '', optionsName, optionsKey, storeKey, ...restProps} :
                            { dataPath?: string; formItemCode: string; optionsName: string; optionsKey: string; storeKey: string; padding: object; margin: object}) => {
    const shoppingList = useModuleContext(s=>s.moduleStore._shoppingList);
    const _couponList = useModuleContext(s=>s.moduleStore._couponList) || [];
    const _selectCoupon = useModuleContext(s=>s.moduleStore._selectCoupon) || {};
    const [isShowCoupon, setShowCoupon] = useState(false);
    const setModuleStore = useModuleContext(s=>s.setModuleStore);
    const {isEnabled} = useEditor(state => ({
        isEnabled: state.options.enabled
    }));
    const {styles} = useStyles();

    useEffect(() => {
        (async () => {
            if(!isEmpty(shoppingList)) {
                const data = await post('web/oc/contract/queryUserConByGoods.json', {
                    pmContractGoodsDomainListStr: JSON.stringify(shoppingList)
                });
                setShowCoupon(data.length);
                setModuleStore({
                    _couponList: data,
                })
            }
        })()
    }, [shoppingList]);

    if(isEnabled || isShowCoupon) {
        return (
            <div style={{...padding, ...margin, ...restProps}}>
                <p style={{fontSize: 14, marginBottom: 10}}>使用优惠券</p>
                <div className={styles.content} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    {!isEmpty(_selectCoupon) ? <p className={'title'}>已选择{_selectCoupon.discName}优惠券</p>
                        :
                        <div className={'title'}>
                            <p style={{width: 200, fontSize: 14}}>当前有{_couponList.length}张优惠券</p>
                        </div>
                    }
                    <Element width={300} canvas is={Container} id={'coupon'}></Element>
                </div>
            </div>
        )
    }

    return null;
}

export const CouponServiceComponent = HOCCodeWrapComponent(CouponService);