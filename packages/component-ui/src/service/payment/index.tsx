import {HOCCodeWrapComponent} from "@brushes/component-core";
import {dynamicFormFields} from "@brushes/form";
import {Form, FormInstance} from "antd";
import {useComponentListData} from "component-store";


const PaymentService = ({padding, margin, formItemCode, dataPath = '', optionsName, optionsKey, storeKey, ...restProps} :
                            { dataPath?: string; formItemCode: string; optionsName: string; optionsKey: string; storeKey: string; padding: object; margin: object}) => {
    const form = Form.useFormInstance();
    const options = useComponentListData(dataPath, storeKey);

    return (
        <div style={{ ...padding, ...margin, ...restProps}}>
            {
                dynamicFormFields(
                    [
                        {
                            name: formItemCode,
                            label: '支付方式',
                            type: 'radioGroup',
                            rules: [{required: true}],
                            extraProps: {
                                options,
                                optionsName,
                                optionsKey
                            }
                        },
                        {
                            name: 'paywd',
                            label: '支付密码',
                            type: 'opt',
                            rules: [{required: true}],
                            extraProps: {
                              mask:"*",
                              dependencies: ['fchannelCode']
                            },
                            calIsVisible: (form: FormInstance) => ['01', '02'].includes(form?.getFieldValue('fchannelCode'))
                        },
                        {
                            name: 'contractEcurl',
                            label: '附件上传',
                            type: 'upload',
                            rules: [{required: true}],
                            extraProps: {
                                text: '',
                                listType: 'picture-card',
                                dependencies: ['contractPmode'],
                                suffixicon: '只能上传jpg/png/pdf文件，且不超过5mb'
                            },
                            calIsVisible: (form: FormInstance) => form?.getFieldValue('contractPmode') === '1'
                        }
                    ],
                    form
                )
            }
        </div>
    )
}

export const PaymentServiceComponent = HOCCodeWrapComponent(PaymentService);