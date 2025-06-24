import {message, Popconfirm, Space} from 'antd';
import React, { Fragment } from 'react';
import {useModuleContext} from "@brushes/component-core";
import { HOCCodeWrapComponent } from '@brushes/core-transform';
import {post} from "@brushes/request";
import {ButtonOperate} from "../../service";
import {Element} from "@craftjs/core";

export type ButtonTypePlus = {
    dataState?: string;
    idKey?: 'dataState' | string; //数据状态对应key
    type?: 'primary' | 'dashed' | 'link' | 'text' | 'default' | 'render';
    render?: () => JSX.Element;
    code?: string;
    name?: string;
    [key: string]: any;
};

const DiyAction = ({title, api, callbackName, fontSize, paramKey, value, padding = {}}:any) => {
    const record = useModuleContext(s=>s.moduleStore._skuInfo);
    const retry = useModuleContext(s=>s.moduleStore[callbackName]);
    const onClick = async () => {
        const { msg } = await post(api, {
           [paramKey]: record[value],
        })
        message.success(msg);
        retry()
    }

    return (
        <Popconfirm
            title={title}
            description={`你确定要${title}?`}
            onConfirm={onClick}
        >
            <a style={{fontSize, ...padding}}>{title}</a>
        </Popconfirm>
    )
}

export const DiyActionComponent = HOCCodeWrapComponent(DiyAction);

const TableAction: React.FC<{
    buttonList: ButtonTypePlus[];
    padding?: object;
    align: "start" | "end" | "center" | "baseline";
    direction: "vertical" | "horizontal"
    margin?:object
}> = ({ buttonList, align, direction, padding = {}, margin = {} }) => {
    const record = useModuleContext(s=>s.moduleStore._skuInfo);
    return (
        <div style={{...padding, ...margin}}>
            <Space direction={direction} align={align} size={'small'}>
                {buttonList.map(({ type = 'link', code, name, idKey = 'dataState', dataState, ...restProps }, index: number) => {
                    if (dataState && !dataState.includes(record[idKey]+'')) {
                        return null;
                    }
                    if (type === 'render') {
                        return <Element key={name} id={name} canvas is={DiyActionComponent} title={name}/>;
                    }
                    return (
                        <Fragment key={index}>
                            <Element id={name} type={type} canvas is={ButtonOperate} text={name}/>
                        </Fragment>
                    );
                })}
            </Space>
        </div>
    );
};

export const ButtonList = HOCCodeWrapComponent(TableAction);