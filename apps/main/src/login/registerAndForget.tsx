import { Drawer } from 'antd';
import { FC, memo, ReactNode, useEffect, useState } from 'react';
import { Login as LoginJsx } from './login';
import loginContext from './context';
import { forgetConfig, registerConfig } from './config';

const RegisterAndForget: FC<{ children: ReactNode; dataType?: string }> = ({ children, dataType }) => {
    const dispatch = loginContext.useOpenDispatch();
    const [formConfig, setConfig] = useState(forgetConfig);
    const { visible, title, mode } = loginContext.useOpenValues();

    useEffect(() => {
        const arr = mode === 'register' ? registerConfig : forgetConfig;
        setConfig(arr);
    }, [mode]);

    return (
        <Drawer
            destroyOnHidden={true}
            title={title}
            getContainer={false}
            width={420}
            // style={{ position: 'absolute' }}
            placement="right"
            onClose={() =>
                dispatch({
                    type: 'close',
                    payload: {
                        mode: undefined,
                        to: undefined,
                        title: '修改密码',
                        buttonText: '登录',
                        textInfo: '入驻申请'
                    }
                })
            }
            open={visible}
        >
            <LoginJsx name={'registerForm'} dataType={dataType} children={children} formConfig={formConfig} />
        </Drawer>
    );
};

export default memo(RegisterAndForget);
