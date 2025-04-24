import { FieldType } from '@brushes/form';
import { QjIcon } from '@brushes/share-resource';
import React from 'react';
import { forgetAndRegister } from './resetForm';
import {FormInstance} from "antd";

export const registerConfig: Array<FieldType> = [
    {
        name: 'userName',
        type: 'text',
        label: '',
        rules: [
            {
                required: true,
                message: '输入会员名称',
            },
        ],
        extraProps: {
            prefix: <QjIcon style={{ fontSize: '24px' }} name={'icon-user'} />,
            placeholder: '会员名',
            style: {
                height: 40
            }
        }
    },
    {
        name: 'userPhone',
        type: 'text',
        label: '',
        rules: [
            ({setFieldValue}: FormInstance) => ({
                async validator(_: unknown, value: string) {
                    if (/^1[3-9]\d{9}$/.test(value)) {
                        setFieldValue('isDisabled', '')
                        // await getPhoneForPlaRegSc({ userPhone: value });
                        return Promise.resolve();
                    } else {
                        setFieldValue('isDisabled', true)
                        return Promise.reject(new Error('输入正确的手机号码'));
                    }
                }
            })
        ],
        extraProps: {
            prefix: <QjIcon style={{ fontSize: '24px' }} name={'icon-user'} />,
            placeholder: '手机号',
            style: {
                height: 40
            }
        }
    },
    ...forgetAndRegister
];
