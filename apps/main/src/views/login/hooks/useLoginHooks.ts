import {removeStorage, setLocalStorage, removeLocalStorage} from '@brushes/utils-react';
import { useState } from 'react';
import { loginInByCode, loginOut } from 'qj-b2c-api';
import { loginIn } from 'component-api';
import _ from 'lodash-es';

let key: string;
try {
  key = process.env.REACT_APP_SESSION_KEY || 'saas-token';
} catch (err) {
  key = 'saas-token';
}

interface DataType {
  dataObj: {
    [v: string]: any;
  };
}

export function useLoginHooks(callback: (e:object) => void) {
  const [loading, setLoading] = useState<boolean>(false);
  async function loginImpl(values: any) {
    const code = values.verCode;
    const userPhone = values.userPhone;
    const params = _.omit(values, ['remember', 'verCode', 'userPhone']);
    if (values.remember) {
      setLocalStorage(values.loginName, btoa(values.passwd));
    } else {
      removeLocalStorage(values.loginName);
    }
    setLoading(true);
    try {
      const data = (await loginIn({...params, loginName: userPhone, code})) as DataType;
      callback(data.dataObj);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  async function loginWithCodeImpl(values: any) {
    setLoading(true);
    try {
      const userPhone = values.userPhone;
      const params = _.omit(values, ['userPhone']);
      const data = (await loginInByCode({...params, loginName: userPhone})) as DataType;
      callback(data.dataObj);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  async function loginOutImpl(params = { oauthEnvCode: 'out' }) {
    setLoading(true);
    try {
      await loginOut(params);
      removeStorage(key);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  return {
    loginImpl,
    setLoading,
    loading,
    loginOutImpl,
    loginWithCodeImpl
  };
}
