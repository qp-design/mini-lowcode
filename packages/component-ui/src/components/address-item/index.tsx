import {createStyles} from "antd-style";
import {useMemo, useState} from "react";
import {Empty, Form, message, Popconfirm, Radio, Spin} from 'antd';
import type { RadioChangeEvent } from 'antd';
import {Container, useModuleContext} from "@brushes/component-core";
import {Text} from "../../basic";
import {get, post} from "@brushes/request";
import { dynamicFormFields } from "@brushes/form";

const useStyles = createStyles(({token, css}) => {
    return {
        container: css`
            display: grid;
            height: 40px;
            padding: 0 10px;
            border-radius: 4px;
            line-height: 40px;
            grid-template-columns: 1fr 300px;
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


const ItemSelect = ({onChange, description, callbackName, storeKey, openKey}: {description?: string; openKey: string; onChange: (e:any) => void; callbackName: string; storeKey: string}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const retry = useModuleContext(s=>s.moduleStore[callbackName]);
    const setModuleStore = useModuleContext(s=>s.setModuleStore);
    const location = useModuleContext(s=> s.moduleStore._location) || {};
    const addressList = useModuleContext(s => s.moduleStore[storeKey]) || [];
    const { styles } = useStyles();
    const selectAddressId = useMemo(() => {
        const { addressId = ''} = addressList.find(item => {
            return item.addressDefault === '1'
        }) || {};
        if(addressId) {
        }
        return addressId;
    }, [addressList]);

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

    const fetchFreight = async (id:string) => {
        setLoading(true);
        const item = addressList.find((item:any) => item.addressId === id) || {};
        const { areaCode, goodsReceiptMem, goodsReceiptPhone, provinceName , cityName, areaName, addressDetail } = item;
        try {
            const data = await post('web/oc/contract/calculateFreightFare.json', {
                areaCode: areaCode,
                ...location
            });

            setModuleStore({
                _orderAddressInfo: {
                    freight: data.dataObj,
                    goodsReceiptMem: goodsReceiptMem,
                    goodsReceiptPhone: goodsReceiptPhone,
                    goodsReceiptArrdess: provinceName + cityName + areaName + addressDetail,
                    areaCode: areaCode
                }
            });
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }

    }

    const changeImpl = async (e: RadioChangeEvent, onChange: (e: any) => void) => {
        onChange(e.target.value);
        await fetchFreight(e.target.value)
    }

    if(addressList.length === 0){
        return <Empty description={description}/>
    }
    return (
        <Spin spinning={loading}>
            <Radio.Group
                style={{width: '100%'}}
                defaultValue={selectAddressId}
                onChange={(e) => changeImpl(e, onChange)}
            >
                {
                    addressList.map((item) => {
                        return (
                            <div className={styles.container} key={item.addressId}>
                                <Radio value={item.addressId}><ItemJsx {...item}/></Radio>
                                <div className={'operate'}>
                                    <Container
                                        is={Container}
                                        padding={{
                                            paddingLeft: 5,
                                            paddingRight: 5,
                                            paddingTop: 5,
                                            paddingBottom: 5,
                                        }}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                        flexDirection={'row'}>
                                        {/*<Element*/}
                                        {/*    canvas*/}
                                        {/*    id={item.addressId}*/}
                                        {/*    is={Container}*/}
                                        {/*    padding={{*/}
                                        {/*        paddingLeft: 5,*/}
                                        {/*        paddingRight: 5,*/}
                                        {/*        paddingTop: 5,*/}
                                        {/*        paddingBottom: 5,*/}
                                        {/*    }}*/}
                                        {/*    justifyContent={'space-between'}*/}
                                        {/*    alignItems={'center'}*/}
                                        {/*    flexDirection={'row'}*/}
                                        {/*>*/}
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
                                            <div>
                                                <Text
                                                    color={'#f00'}
                                                    fontSize={12}
                                                    num={1}
                                                    text={'删除'}
                                                />
                                            </div>
                                        </Popconfirm>
                                        {/*</Element>*/}
                                    </Container>
                                </div>
                            </div>
                        )
                    })
                }
            </Radio.Group>
        </Spin>
    )
}
export const AddressItem = ({padding = {}, description, storeKey, openKey, callbackName, ...props}: {
    padding?: object;
    callbackName: string;
    description?: string;
    storeKey: string;
    openKey: string;
}) => {
    const form = Form.useFormInstance();

    return (
        <div
            style={{
                ...padding,
                ...props,
            }}
        >
            {
                dynamicFormFields([
                    {
                        type: 'slot',
                        name: 'addressId',
                        rules: [{required: true}],
                        value: '',
                        extraProps: {
                            render: ({onChange}: {onChange: (e:any)=>void}) =>
                                <ItemSelect description={description} onChange={onChange} storeKey={storeKey} openKey={openKey} callbackName={callbackName}/>
                        }
                    },
                ], form)
            }

        </div>
    );
};