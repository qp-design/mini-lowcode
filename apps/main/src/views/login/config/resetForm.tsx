import { FieldType } from '@brushes/form';
import { QjIcon } from '@brushes/share-resource';
import { FormInstance } from 'antd';
import CodeJsx from '../components/code';
import ImageJsx from '../components/image';
import React from 'react';
import { checkUserPhoneThere } from 'qj-b2c-api';

export const imgCode : Array<FieldType> = [
    {
        name: 'verCode',
        type: 'text',
        label: '',
        rules: [{ required: true, message: '请输入' }],
        extraProps: {
            autoComplete: 'off',
            shouldUpdate: (prevValue, curValue) => (prevValue.isDisabled !== curValue.isDisabled),
            placeholder: '请输入',
            addonAfter: (form: FormInstance) => {
                return <ImageJsx form={form} />;
            },
            style: {
                height: 40
            }
        }
    },
]
export const code: Array<FieldType> = [
    ...imgCode,
    {
    name: 'code',
    type: 'text',
    label: '',
    rules: [{ required: true, message: '请输入验证码' }],
    extraProps: {
        autoComplete: 'off',
        shouldUpdate: (prevValue, curValue) => prevValue.verCode !== curValue.verCode,
        prefix: <QjIcon style={{ fontSize: '24px' }} name={'icon-yanzhengma'} />,
        placeholder: '请输入验证码',
        addonAfter: (form: FormInstance) => {
            return <CodeJsx form={form} />;
        },
        style: {
            height: 40
        }
    }
}
];
export const forgetAndRegister: Array<FieldType> = [
     ...code,
    {
        name: 'isDisabled',
        type: 'text',
        label: '',
        style: {display: 'none'}
    },
    {
        name: 'userPwsswd',
        type: 'text',
        label: '',
        rules: [
            {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,18}$/,
                message: '大小写字母+数字组成8-18位'
            }
        ],
        extraProps: {
            autoComplete: 'off',
            prefix: <QjIcon style={{ fontSize: '24px' }} name={'icon-mima'} />,
            placeholder: '请输入新密码',
            type: 'password',
            style: {
                height: 40
            }
        }
    }
];

export const userPhone : Array<FieldType> = [
    {
        name: 'userPhone',
        type: 'text',
        label: '',
        rules: [
            ({setFieldValue}: FormInstance) => ({
                async validator(_:any, value: string) {
                    if (/^1[3-9]\d{9}$/.test(value)) {
                        try {
                            await checkUserPhoneThere({ userPhone: value });
                            setFieldValue('isDisabled', '');
                            return Promise.resolve();
                        } catch (e) {
                            setFieldValue('isDisabled', true)
                            return Promise.reject(e);
                        }

                    } else {
                        setFieldValue('isDisabled', true)
                        return Promise.reject(new Error('输入正确的手机号码'));
                    }
                }
            })
        ],
        extraProps: {
            autoComplete: 'off',
            prefix: <QjIcon style={{ fontSize: '24px' }} name={'icon-user'} />,
            placeholder: '手机号',
            style: {
                height: 40
            }
        }
    },
]

export const userPhoneDefault : Array<FieldType> = [
    {
        name: 'userPhone',
        type: 'text',
        label: '',
        rules: [
            ({setFieldValue}: FormInstance) => ({
                async validator(_:any, value: string) {
                    if (/^1[3-9]\d{9}$/.test(value)) {
                        try {
                            await checkUserPhoneThere({ userPhone: value });
                            setFieldValue('isDisabled', '');
                            return Promise.resolve();
                        } catch (e) {
                            setFieldValue('isDisabled', true)
                            return Promise.reject(e);
                        }

                    } else {
                        setFieldValue('isDisabled', true)
                        return Promise.reject(new Error('输入正确的手机号码'));
                    }
                }
            })
        ],
        extraProps: {
            disabled: true,
            autoComplete: 'off',
            prefix: <QjIcon style={{ fontSize: '24px' }} name={'icon-user'} />,
            placeholder: '手机号',
            style: {
                height: 40
            }
        }
    },
]

export const forgetConfig: Array<FieldType> = [
    ...userPhone,
    ...forgetAndRegister
];
