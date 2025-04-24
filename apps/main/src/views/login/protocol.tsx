import { Form } from 'antd';
import { Checkbox, Space } from 'antd';
import React, { FC, ReactNode } from 'react';
import loginContext from './context';

const Protocol: FC<{ children: ReactNode; actionImpl: (e: string) => void }> = ({ actionImpl, children }) => {
    const { textInfo, mode, to } = loginContext.useOpenValues();
    return (
        <div className="bottom-protocol">
            {['update'].includes(mode) ? (
                <div></div>
            ) : (
                <Form.Item name="protocol" valuePropName="checked" rules={[{ required: true, message: '请勾选协议' }]}>
                    <Space>
                        <Checkbox>阅读并同意</Checkbox>
                        {children}
                    </Space>
                </Form.Item>
            )}
            <a onClick={() => actionImpl(to)} className="login-form-forgot margin-top">
                {textInfo}
            </a>
        </div>
    );
};

export default Protocol;
