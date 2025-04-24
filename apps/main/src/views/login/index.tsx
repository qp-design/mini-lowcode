import {FC, memo, ReactNode, useEffect, useState} from 'react';
import HeaderJsx from './header';
import { Login as LoginJsx } from './login';
import { loginWithAccount, loginWithCode } from './config';
import Register from './registerAndForget';
import loginContext from './context';
import './scss/index.scss';

const LoginWrap: FC<{ children: ReactNode; data: string; callback: (e: object) => void }> = ({ children, data, callback }) => {
    const [index, setIndex] = useState<number>(0);
    const [formConfig, setFormConfig] = useState(loginWithAccount);
    useEffect(() => {
        const arr = index === 0 ? loginWithAccount : loginWithCode;
        setFormConfig(arr);
    }, [index]);
    return (
        <div className={'loginComponent'}>
            <loginContext.OpenProvider>
                <div className={'loginRoot'}>
                    <Register children={children} dataType={data} callback={callback}/>
                    <HeaderJsx index={index} setIndex={setIndex} menu={['密码登录', '验证码登录']} />
                    <LoginJsx
                        dataType={data}
                        callback={callback}
                        index={index}
                        children={children}
                        isNeedRemeber={index === 0}
                        formConfig={formConfig}
                    />
                </div>
            </loginContext.OpenProvider>
        </div>
    );
};

export default memo(LoginWrap);