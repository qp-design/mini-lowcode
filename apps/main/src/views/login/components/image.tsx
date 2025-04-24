import React, { useEffect, useState } from 'react';
import {FormInstance, Spin} from 'antd';
import './image.css'
const ImageJsx = ({ form }: { form: FormInstance }) => {
    const isDisabled = form.getFieldValue('isDisabled');
    const [loading, setLoading] = useState(false);
    const [verImg, setVerImg] = useState('');
    useEffect(() => {
        const userPhone = form.getFieldValue('userPhone');
        if(isDisabled === '' || userPhone) {
            fetchCode()
        }
    }, [isDisabled]);

    const fetchCode = () => {
        setLoading(true);
        const { getFieldsValue } = form;
        const { loginName, userPhone } = getFieldsValue();
        const value = loginName || userPhone;
        fetch(`/web/ml/mlogin/getVerCode.img?userPhone=${value}`)
            .then(code => {
                return code;
            })
            .then(res => res.arrayBuffer())
            .then(res => {
                const imgUrl = "data:image/png;base64," + window.btoa(String.fromCharCode(...new Uint8Array(res)));
                setVerImg(imgUrl)
            })
            .catch((error: any) => {})
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Spin spinning={loading}>
            { verImg ? <img src={verImg} onClick={fetchCode} style={{width: 90, height: 38}} /> :
                <div style={{width: 90, height: 38}}></div> }
        </Spin>
    );
};

export default ImageJsx;
