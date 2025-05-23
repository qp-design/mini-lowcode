import { FieldType } from '@brushes/form';
import {FormInstance} from "antd";
import {addressBasicConfig} from "@brushes/component-setting";

export const registerConfig: Array<FieldType> = [
    {
        name: 'userinfoCorp',
        type: 'text',
        label: '采购商',
        rules: [
            {
                required: true,
                message: '输入采购商名称',
            },
        ],
        extraProps: {
            placeholder: '输入采购商名称',
        }
    },
    {
        name: 'userinfoCon',
        type: 'text',
        label: '联系人',
        rules: [
            {
                required: true,
                message: '输入联系人',
            },
        ],
        extraProps: {
            placeholder: '输入联系人',
        }
    },
    {
        name: 'userinfoConPhone',
        type: 'text',
        label: '手机号',
        rules: [
            {required: true, message: '输入正确的手机号码'},
            ({setFieldValue}: FormInstance) => ({
                async validator(_: unknown, value: string) {
                    if (/^1[3-9]\d{9}$/.test(value)) {
                        setFieldValue('isDisabled', '')
                        // await getPhoneForPlaRegSc({ userPhone: value });
                        return Promise.resolve();
                    } else {
                        setFieldValue('isDisabled', true)
                        return Promise.reject();
                    }
                }
            })
        ],
        extraProps: {
            placeholder: '手机号',
        }
    },
    {
        name: 'userPwsswd',
        type: 'text',
        label: '密码',
        rules: [
            {
                required: true,
                message: '输入密码',
            },
        ],
        extraProps: {
            type: 'password',
            placeholder: '输入密码',
        }
    },
    {
        name: 'userPwsswdAgin',
        type: 'text',
        label: '确认密码',
        rules: [
            {
                required: true,
                message: '输入确认密码',
            },
        ],
        extraProps: {
            type: 'password',
            placeholder: '输入确认密码',
        }
    },
    ...addressBasicConfig,
    {
        label: '备注信息',
        name: 'userinfoRemark',
        type: 'text',
    },
    {
        label: '邮箱账号',
        name: 'emailCode',
        type: 'text',
    },
    {
        label: '资质文件',
        name: 'upFileArr',
        type: 'upload',
        rules: [
            {
                required: true,
                message: '请选择',
            },
        ],
        extraProps: {
            listType: 'picture-card',
            text: '上传图片',
            max: 1,
            suffixicon: (
                <span style={{ fontSize: 12, color: '#999' }}>
                建议上传1Mb以内的图片
                </span>
            ),
        }

    },
];
