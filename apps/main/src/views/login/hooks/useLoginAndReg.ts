import { useCallback, useMemo } from 'react';
import { updateUmuserPw } from 'qj-b2c-api';
import { saveUserPhoneForPla } from 'component-api'
import loginContext from '../context';
import {useLoginHooks} from "./useLoginHooks";

type ActionKey = 'login' | 'loginWithCode' | 'register' | 'update';

type ActionType = {
    [v in ActionKey]: (e: object) => void;
};

export function useLoginAndRegister(isNeedRemeber: boolean | undefined, callback: (e: object, path?:string) => void) {
    const dispatch = loginContext.useOpenDispatch();
    const { loginImpl, loginWithCodeImpl, setLoading, loading } = useLoginHooks(callback);
    const { buttonText, mode } = loginContext.useOpenValues();

    const submitImpl: ActionType = useMemo(
        () => ({
            login: loginImpl,
            loginWithCode: loginWithCodeImpl,
            register: registerImpl,
            update: updateImpl
        }),
        []
    );

    async function updateImpl(values: any) {
        setLoading(true);
        try {
            await updateUmuserPw(values);
            toLoginImpl();
        } catch (err) {
        } finally {
            setLoading(false);
        }
    }

    async function registerImpl(values: any) {
        callback({}, '/user/center');
        setLoading(true);
        try {
            const data = await saveUserPhoneForPla(values);
            callback(data.dataObj, '/user/center');
        } catch (err) {
        } finally {
            setLoading(false);
        }
    }

    const onFinish = (values: any) => {
        let key = '';
        switch (isNeedRemeber) {
            case true:
                key = 'login';
                break;
            case false:
                key = 'loginWithCode';
                break;
            case undefined:
                key = mode;
                break;
        }
        submitImpl[key as ActionKey](values);
    };

    const updateToRegisterImpl = () => {
        dispatch({
            type: 'open',
            payload: {
                mode: 'update',
                to: 'register',
                title: '修改密码',
                buttonText: '设置新密码',
                textInfo: '注册新用户'
            }
        });
    };

    const LoginToRegisterImpl = () => {
        dispatch({
            type: 'open',
            payload: {
                mode: 'register',
                to: 'login',
                title: '注册新用户',
                buttonText: '立即注册',
                textInfo: '登录'
            }
        });
    };

    const toLoginImpl = () => {
        dispatch({
            type: 'close',
            payload: {
                mode: undefined,
                to: 'register',
                title: '修改密码',
                buttonText: '登录',
                textInfo: '注册新用户'
            }
        });
    };

    const actionImpl = useCallback((mode = 'register') => {
        switch (mode) {
            case 'update':
                updateToRegisterImpl();
                break;
            case 'register':
                LoginToRegisterImpl();
                break;
            case 'login':
                toLoginImpl();
                break;
        }
    }, []);

    return {
        LoginToRegisterImpl,
        buttonText,
        mode,
        actionImpl,
        onFinish,
        loading
    };
}
