import { useEffect, useMemo, useState } from 'react';
import { Button, Form } from 'antd';
import { useMountedRef } from '@brushes/form';
import { get } from '@brushes/request';

export const CodeComponent = ({ api = '/web/ml/muser/sendPhone.json', codeKey, height = 36 }: { codeKey?: string; api?: string; height?: number }) => {
  const form = Form.useFormInstance();
  const verCode = form.getFieldValue('verCode');
  const [dataTime, setDataTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const isMounted = useMountedRef();
  const isfetch = useMemo(() => {
    return dataTime > 0 || !verCode;
  }, [dataTime, verCode]);

  useEffect(() => {
    const time = setTimeout(function next() {
      if (dataTime === 0) {
        clearTimeout(time);
        return;
      }
      if (isMounted.current) {
        setDataTime((dataTime) => dataTime - 1);
      }
    }, 1000);

    return () => clearTimeout(time);
  }, [dataTime, isMounted]);

  const fetchCode = () => {
    setLoading(true);
    const { getFieldsValue } = form;
    const { loginName, userPhone, userinfoConPhone, verCode, ...rest } = getFieldsValue();
    let params = {
      userPhone: loginName || userPhone || userinfoConPhone,
      code: verCode
    }
    if(codeKey) {
      params = {
        userPhone: rest[codeKey],
        code: verCode
      }
    }

    get(api, params)
      .then(() => {
        setDataTime(1 * 60);
      })
      .catch((error: any) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Button loading={loading} size={'small'} type={'link'} disabled={isfetch} style={{ cursor: 'pointer', height, width: 90 }} onClick={fetchCode}>
      {dataTime === 0 ? '获取验证码' : `倒计时${dataTime}秒`}
    </Button>
  );
};
