import React from "react"
import {Button} from "antd"
/* 导入对应的模块*/
import { useModuleContext } from "@brushes/component-core";


function Add() {
    const isExtend = useModuleContext(s=> s.moduleStore.isExtend);
    const setModuleStore = useModuleContext(s=> s.setModuleStore);

    const open = () => {
        setModuleStore({
            isExtend: 'true'
        })
    }

    const close = () => {
        setModuleStore({
            isExtend: ''
        })
    }

    if(!isExtend) {
        return <Button onClick={open} type='link'>关闭</Button>
    }

    return (
     <Button onClick={close} type='link'>关闭</Button>
    )
}

export default Add;
