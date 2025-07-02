import {useRef, useState} from 'react';
import { paymentCommit } from 'component-api';
import {useModuleContext} from "@brushes/component-core";
import {message} from "antd";
import { useNavigate } from 'react-router-dom';
import {useSearchParamHook} from "component-store";
import { get } from 'lodash';

export function useOrderResult(storeKey = 'payInfo') {
  const [loading, setLoading] = useState(false);
  const title = useRef('');
  const [open, setOpen] = useState(false);
  const _skuInfo = useModuleContext(s=>s.moduleStore[storeKey]) || {};
  const [contractBillcode, contractBbillcode] = useSearchParamHook(['contractBillcode', 'contractBbillcode']);
  const [url, setUrl] = useState('');
  const navigator = useNavigate();

  const paymentImpl = (code: string, paywd?: string) => {
    switch (code) {
      // case 'wechatwap':
      //   wechatwap();
      //   break;
      case 'wechatpc':
        title.current = '微信支付';
        wechatpc(code);
        break;
      case 'alipaywap':
        title.current = '支付宝支付';
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
        if(contractBillcode) {
          navigator(`/result?contractBillcode=${contractBillcode}`, {replace:true})
        } else {
          navigator(`/result?contractBbillcode=${contractBbillcode}`, {replace:true})
        }
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
  // const wechatwap = async (code:string) => {
  //   try {
  //     const res = await nonBasicAccoutPrepay(code);
  //     let v_html = document.getElementById('v_html');
  //     v_html.innerHTML = '<div>' + res.dataObj.htmlStr + '</div>';
  //     console.log(99, v_html);
  //     document.getElementById('paaspaysubmit').submit();
  //     setLoading(false);
  //   } catch (err) {
  //     setLoading(false);
  //   }
  // };

  // h5 微信
  const wechatpc = async (code:string) => {
    try {
      const res = await nonBasicAccoutPrepay(code);
      const url = get(res, 'dataObj.requestData.code_url', '');
      setUrl(url);
      setOpen(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const onSubmit = (cb:() => void, value: any) => {
    cb();
    const { fchannelCode, paywd } = value;
    paymentImpl(fchannelCode, paywd)
  }

  return {
    loading,
    url,
    title,
    open,
    onSubmit,
    setOpen
  };
}
