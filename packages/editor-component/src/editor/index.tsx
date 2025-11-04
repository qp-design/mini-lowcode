import {ReactNode} from "react";
import * as service from "@brushes/lowcode-component-ui/service";
import * as basic from "@brushes/lowcode-component-ui/basic";
import Materials from "@brushes/lowcode-component-ui/components";
import * as operate from "@brushes/lowcode-component-ui/operate";

import {Card, Checkbox, Empty, InputNumber, Popconfirm, Spin, Statistic} from "antd";
import {DynamicForm} from "@brushes/form";
import {
    Container,
    ContainerWrap,
    IsShowContainer,
    ModuleProvider,
    OutContainer,
    SlotEmpty,
    Editor
} from "@brushes/component-core";

const { Timer } = Statistic;
export const WrapContainer = ({children, ...restProps}: { enabled?: boolean; children: ReactNode }) => {
    return (
        <Editor
            enabled={false}
            {...restProps}
            resolver={{
                ...service,
                ...basic,
                ...operate,
                ...Materials,
                Card,
                Empty,
                Timer,
                InputNumber,
                Checkbox,
                Popconfirm,
                DynamicForm,
                Spin,
                ModuleProvider,
                OutContainer,
                SlotEmpty,
                ContainerWrap,
                Container,
                IsShowContainer
            }}>
            <ModuleProvider>
                {children}
            </ModuleProvider>
        </Editor>
    )
}