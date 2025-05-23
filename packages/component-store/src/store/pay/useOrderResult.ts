import { useRef, useState } from 'react';
import { paymentCommit } from 'component-api';
import { setStorage, taroMessage } from '@brushes/utils';
import {useModuleContext} from "@brushes/component-core";
import {message} from "antd";
import {useNavigateImpl} from "@brushes/component-tool";


export function useOrderResult() {
  const [loading, setLoading] = useState(false);
  const _skuInfo = useModuleContext(s=>s.moduleStore._skuInfo) || {};
  const { navigator } = useNavigateImpl();
  const paymentImpl = (code: string, paywd?: string) => {
    switch (code) {
      case 'wechatwap':
        wechatwap(code);
        break;
      case 'alipaywap':
        alipaywap(code);
        break;
      default:
        basicImpl(code, paywd);
        break;
    }
  };

  const commonPrevPayImpl = (code: string) => {
    setLoading(true);
    const { ptradeSeqno, contractBlance, payChannelList } = _skuInfo;
    const { fchannelCode, faccountOuterNo = '' } = fetchPayCode(payChannelList, code);
    return {
      ptradeSeqno,
      contractBlance,
      fchannelCode,
      faccountOuterNo
    };
  };

  const fetchPayCode = (payChannelList, code) => {
    return payChannelList.find((item) => item.fchannelCode === code) || {};
  };

  //非基本户支付场景
  const nonBasicAccoutPrepay = async (code: string, paywd?: string) => {
    const { ptradeSeqno, contractBlance, fchannelCode, faccountOuterNo } = commonPrevPayImpl(code);

    const pyJsons = [
      {
        faccountIdType: 'ACCOUNT',
        fchannelCode,
        orderAmount: _skuInfo.orderMoney,
        faccountId: faccountOuterNo,
      }
    ];
    return await paymentCommit({
      ptradeSeqno,
      payCommitStr: JSON.stringify(pyJsons),
      contractBlance,
      paywd
    });
  };

  // 基本户
  const basicImpl = async (code: string, paywd) => {
    try {
      const { msg } = await nonBasicAccoutPrepay(code, paywd);
      message.success(msg);
      setTimeout(() => {
        navigator(`/payResult?contractBillcode=${_skuInfo.contractBillcode}`)
      }, 500)
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  // 支付宝
  const alipaywap = async (code: string) => {
    try {
      const res = await nonBasicAccoutPrepay(code);
      let v_html = document.getElementById('v_html');
      v_html.innerHTML = '<div>' + res.dataObj.htmlStr + '</div>';
      document.forms[0].submit();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  // h5 微信
  const wechatwap = async (code:string) => {
    try {
      const res = await nonBasicAccoutPrepay(code);
      let v_html = document.getElementById('v_html');
      v_html.innerHTML = '<div>' + res.dataObj.htmlStr + '</div>';
      document.getElementById('paaspaysubmit').submit();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const onSubmit = (cb:() => void, value: any) => {
    cb();
    const { fchannelCode, paywd } = value;
    paymentImpl(fchannelCode, paywd)
    console.log(123, value);
  }

  return {
    loading,
    onSubmit
  };
}
