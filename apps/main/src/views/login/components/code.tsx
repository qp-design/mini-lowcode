import React, {useEffect, useMemo, useState} from 'react';
import { Button, FormInstance } from 'antd';
import { sendPhone } from 'component-api';
import { useMountedRef } from '@brushes/form';

const CodeJsx = ({ form }: { form: FormInstance }) => {
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
        const { loginName, userPhone, verCode } = getFieldsValue();
        sendPhone({ userPhone: loginName || userPhone, code: verCode })
            .then(() => {
                setDataTime(1 * 60);
            })
            .catch((error: any) => {})
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Button
            loading={loading}
            size={'small'}
            type={'link'}
            disabled={isfetch}
            style={{ cursor: 'pointer', height: 36, width: 90 }}
            onClick={fetchCode}
        >
            {dataTime === 0 ? '获取验证码' : `倒计时${dataTime}秒`}
        </Button>
    );
};

export default CodeJsx;
