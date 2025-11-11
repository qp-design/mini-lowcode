import { Form } from 'antd';
import { Checkbox } from 'antd';
import { FC, ReactNode } from 'react';
import loginContext from './context';
import {Container, Element} from "@brushes/component-core";

const Protocol: FC<{ children: ReactNode; isNeedRegister: boolean; actionImpl: (e: string) => void }> = ({ actionImpl, children, isNeedRegister }) => {
    const { textInfo, mode, to } = loginContext.useOpenValues();
    return (
        <div className="bottom-protocol">
            {['update'].includes(mode) ? (
                <div></div>
            ) : (
                <Form.Item name="protocol" valuePropName="checked" rules={[{ required: true, message: '请勾选协议' }]}>
                    <Checkbox>阅读并同意</Checkbox>
                    {children}
                </Form.Item>
            )}
            <Element width={200} id={'register'} canvas is={Container}></Element>
            {/*{ isNeedRegister && <a onClick={() => actionImpl(to)} className="login-form-forgot margin-top">*/}
            {/*    {textInfo}*/}
            {/*</a> }*/}
        </div>
    );
};

export default Protocol;
