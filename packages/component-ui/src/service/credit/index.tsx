import { useModuleRootContext} from "@brushes/component-core";
import {HOCCodeWrapComponent} from "@brushes/core-transform";
import {dynamicFormFields} from "@brushes/form";
import {Form} from "antd";
import {useEffect, useState} from "react";
import {post} from "@brushes/request";
import {get} from "lodash";
import {useEditor} from "@craftjs/core";


const Account = ({onChange, money}) => {
    useEffect(() => {
        onChange(money)
    }, [money]);
    return <div>{money}</div>
}

const Credit = ({padding, margin, dataPath = '', ...restProps}:
                    { dataPath?: string; padding: object; margin: object }) => {
    const form = Form.useFormInstance();
    const {isEnabled} = useEditor(state => ({
        isEnabled: state.options.enabled
    }));

    const contractPmode = Form.useWatch('contractPmode', form);

    const [creditInfo, setCreditInfo] = useState({});
    const userInfo = useModuleRootContext(s => s.rootStore._userInfo);
    const [options, setOptions] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await post('web/crp/CrpUrecharge/queryCrpUrechargePage.json', {
                userinfoCode: userInfo.userInfoCode
            });
            const credit = get(data, 'list[0]', {});
            const res = await post('web/dd/falgSetting/queryFalgSettingPage.json', {flagSettingType: "creditSetting"});
            const list = get(res, 'list', []);
            setOptions(list);
            setCreditInfo(credit);
        })()
    }, []);
    return (
        <>
            {
                creditInfo.urechargeId && contractPmode === '0' || isEnabled ?
                    <div style={{...padding, ...margin, ...restProps}}>
                        {dynamicFormFields(
                            [
                                {
                                    name: 'creditAccount',
                                    label: '授信账户余额',
                                    type: 'slot',
                                    style: {marginBottom: '8px', paddingLeft: '12px', marginTop: '5px'},
                                    extraProps: {
                                        render: ({onChange}) => <Account money={creditInfo.rechargeSmoney}
                                                                         onChange={onChange}/>
                                    }
                                },
                                {
                                    name: 'creditType',
                                    label: '使用授信比例',
                                    type: 'select',
                                    style: {width: 300, paddingLeft: '12px'},
                                    extraProps: {
                                        suffixIcon: '%',
                                        options,
                                        optionsName: 'flagSettingInfo',
                                        optionsKey: 'flagSettingInfo'
                                    }
                                },
                            ],
                            form
                        )
                        }
                    </div> : null}
        </>
    )
}

export const CreditComponent = HOCCodeWrapComponent(Credit);