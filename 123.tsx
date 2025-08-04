import React from "react"
/* 导入对应的模块*/
import {useModuleContext} from "@brushes/component-core";

const list = ["流标", "待交保", "待审核", "审核成功", "审核失败"];

function Add() {
    const {
        dtDateState,
        auctionEnrollQstate,
        auctionEnrollDstate,
        dataState,
        winFlag
    } = useModuleContext(s => s.moduleStore.detail) || {};

    if (dataState === 2 && dtDateState === 1) {
        return (
            <>{winFlag ? '成交' : '未成交'}</>
        )
    }

    if (auctionEnrollQstate !== 0 && auctionEnrollDstate !== 0) {
        if (dataState == -1 && dtDateState === 1) {
            return list[0];
        } else if (dataState == 1) {
            if (dtDateState == -1) {
                return list[1];
            } else if (dtDateState === 0) {
                return list[2];
            } else if (dtDateState === 1) {
                return list[3];
            } else if (dtDateState === 2) {
                return list[4];
            }
        }
  }
}


export default Add;