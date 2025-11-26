import { useRef, useState } from "react";
import { paymentCommit } from "@brushes/lowcode-component-api";
import { useModuleContext } from "@brushes/component-core";
import {message, Modal } from "antd";
import { post } from "@brushes/request";
import { useNavigate } from "react-router-dom";
import { useSearchParamHook } from "../../utils";
import { get } from "lodash";

export function useOrderResult(storeKey = "payInfo") {
  const [loading, setLoading] = useState(false);
  const title = useRef("");
  const [open, setOpen] = useState(false);
  const _skuInfo = useModuleContext((s) => s.moduleStore[storeKey]) || {};
  const [contractBillcode, contractBbillcode] = useSearchParamHook([
    "contractBillcode",
    "contractBbillcode",
  ]);
  const [url, setUrl] = useState("");
  const navigator = useNavigate();

  const paymentImpl = (code: string, paywd: string) => {
    switch (code) {
      // case 'wechatwap':
      //   wechatwap();
      //   break;
      case "wechatpc":
        title.current = "微信支付";
        wechatpc(code);
        break;
      case "alipaywap":
        title.current = "支付宝支付";
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
    const { fchannelCode, faccountOuterNo = "" } = fetchPayCode(
      payChannelList,
      code,
    );
    return {
      ptradeSeqno,
      contractBlance,
      fchannelCode,
      faccountOuterNo,
    };
  };

  const fetchPayCode = (payChannelList: any[], code: string) => {
    return payChannelList.find((item) => item.fchannelCode === code) || {};
  };

  //非基本户支付场景
  const nonBasicAccoutPrepay = async (code: string, paywd?: string) => {
    const { ptradeSeqno, contractBlance, fchannelCode, faccountOuterNo } =
      commonPrevPayImpl(code);

    const pyJsons = [
      {
        faccountIdType: "ACCOUNT",
        fchannelCode,
        orderAmount: _skuInfo.orderMoney,
        faccountId: faccountOuterNo,
      },
    ];
    return await paymentCommit({
      ptradeSeqno,
      payCommitStr: JSON.stringify(pyJsons),
      contractBlance,
      paywd,
    });
  };

  // 基本户
  const basicImpl = async (code: string, paywd: string) => {
    try {
      const { msg } = await nonBasicAccoutPrepay(code, paywd);
      message.success(msg);
      setTimeout(() => {
        if (contractBillcode) {
          navigator(`/result?contractBillcode=${contractBillcode}`, {
            replace: true,
          });
        } else {
          navigator(`/result?contractBbillcode=${contractBbillcode}`, {
            replace: true,
          });
        }
      }, 500);
      setLoading(false);
    } catch (err) {
      if(err === '支付密码未设置') {
        navigator(`/userCenter/userInfo?needCallback=true`);
      } else if(err === '密码不匹配！') {
        Modal.confirm({
          title: '友情提示',
          content: '是否需要重置密码?',
          onOk() {
            navigator(`/userCenter/userInfo?needCallback=true`);
          },
          onCancel() {},
        });
      }
      setLoading(false);
    }
  };

  // 支付宝
  const alipaywap = async (code: string) => {
    try {
      const res = await nonBasicAccoutPrepay(code);
      let v_html = document.getElementById("v_html");
      v_html!.innerHTML = "<div>" + res.dataObj.htmlStr + "</div>";
      document.forms[0].submit();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const syncFetchOrderStatus = async () => {
    const url = contractBillcode
      ? "web/oc/contract/syncContractPayState.json"
      : "web/oc/contract/syncContractBatchPayState.json";
    const data = await post(url, {
      contractBillcode: contractBillcode,
      contractBbillcode: contractBbillcode,
    });
    message.success(data.msg);
    setTimeout(() => {
      if (contractBillcode) {
        navigator(`/result?contractBillcode=${contractBillcode}`, {
          replace: true,
        });
      } else {
        navigator(`/result?contractBbillcode=${contractBbillcode}`, {
          replace: true,
        });
      }
    }, 500);
  };

  // h5 微信
  const wechatpc = async (code: string) => {
    try {
      const res = await nonBasicAccoutPrepay(code);
      const url = get(res, "dataObj.requestData.code_url", "");
      setUrl(url);
      setOpen(true);
      syncFetchOrderStatus();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const onSubmit = (cb: () => void, value: any) => {
    cb();
    const { fchannelCode, paywd } = value;
    paymentImpl(fchannelCode, paywd);
  };

  return {
    loading,
    url,
    title,
    open,
    onSubmit,
    setOpen,
  };
}
