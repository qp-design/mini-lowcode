import {createStyles} from "antd-style";
import {useState} from "react";
import {message, Popconfirm, Radio, Spin} from 'antd';
import {Container, Element, useModuleContext} from "@brushes/component-core";
import {Text} from "../../basic";
import {get} from "@brushes/request";

const useStyles = createStyles(({token, css}) => {
    return {
        container: css`
            display: grid;
            height: 40px;
            padding: 0 10px;
            border-radius: 4px;
            line-height: 40px;
            grid-template-columns: 1fr 300px;
            //width: 1080px;
            align-items: center;
            .operate{
                cursor: pointer;
                display: none;
            }
            &:hover{
                background: #f1f1f1;
                .operate{
                    cursor: pointer;
                    display: block;
                }
            }
        `,
    }
})

const ItemJsx = (item) => {
    return (
        <div style={{flexGrow: 1}}>
            {item.addressMember} {item.addressPhone} {item.provinceName} {item.cityName} {item.areaName} {item.addressDetail}
            { item.addressDefault === '1' &&
                <span style={{ marginLeft: 10, fontSize: 12, padding: 2, color: '#f00', border: 'solid 1px #f00', borderRadius: 4}}>默认</span> }
        </div>
    )
}

export const AddressItem = ({padding = {}, storeKey, openKey, callbackName, ...props}: {
    padding?: object;
    callbackName: string;
    storeKey: string;
    openKey: string;
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const retry = useModuleContext(s=>s.moduleStore[callbackName]);
    const setModuleStore = useModuleContext(s=>s.setModuleStore);
    const addressList = useModuleContext(s => s.moduleStore[storeKey]) || [];
    const { styles } = useStyles();
    const deleteImpl = async (id: string) => {
        setLoading(true);
        const {msg} = await get('web/um/address/deleteAddress.json', { addressId: id });
        message.success(msg);
        setTimeout(async () => {
            await retry()
            setLoading(false);
        }, 500)
    }

    const updateAddress = async (id: string) => {
        setModuleStore({
            [openKey]: true,
            title: '编辑收货地址',
            formEditorId: id
        })
    }

    const setDefaultAddress = async (code: string) => {
        setLoading(true);
        const {msg} = await get('web/um/address/updateAddressDefault.json', { addressCode: code });
        message.success(msg);
        setTimeout(async () => {
            await retry()
            setLoading(false);
        }, 500)
    }

    return (
        <Spin spinning={loading}>
        <div
            style={{
                ...padding,
                ...props,
            }}
        >
            {
                addressList.map((item) => {
                    return (
                        <div className={styles.container} key={item.addressId}>
                            <Radio checked={false} value={item.addressId}><ItemJsx {...item}/></Radio>
                            <div className={'operate'}>
                                <Element
                                    canvas
                                    id={item.addressId}
                                    is={Container}
                                    padding={{
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                    }}
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                    flexDirection={'row'}
                                >
                                    <Text
                                        onClick={()=>setDefaultAddress(item.addressCode)}
                                        color={'#f00'}
                                        fontSize={12}
                                        num={1}
                                        text={'设置默认地址'}
                                    />
                                    <Text
                                        onClick={()=>updateAddress(item.addressId)}
                                        color={'#f00'}
                                        fontSize={12}
                                        num={1}
                                        text={'修改地址'}
                                    />
                                    <Popconfirm
                                        onConfirm={() =>deleteImpl(item.addressId)}
                                        title="删除"
                                        description="确定要删除地址?"
                                    >
                                        <Text
                                            color={'#f00'}
                                            fontSize={12}
                                            num={1}
                                            text={'删除'}
                                        />
                                    </Popconfirm>
                                </Element>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </Spin>
    );
};