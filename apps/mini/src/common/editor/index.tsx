import {ReactNode} from "react";
import * as service from "@brushes/lowcode-component-ui";

// import {DynamicForm} from "@brushes/mobile-form";
import {
    Container,
    ContainerWrap,
    IsShowContainer,
    ModuleProvider,
    OutContainer,
    SlotEmpty,
} from "@brushes/component-core";
import { Editor } from "@craftjs/core"

console.log(18, ModuleProvider);

export const WrapContainer = ({children, ...restProps}: { enabled?: boolean; children: ReactNode }) => {
    return (
        <Editor
          // enabled={false}
          // {...restProps}
          resolver={{
                ...service,
                // // DynamicForm,
                ModuleProvider,
                OutContainer,
                SlotEmpty,
                ContainerWrap,
                Container,
                IsShowContainer
            }}
        >
            <ModuleProvider moduleStore={{ _skuInfo: {type: 'mini'}, open: true }}>
                {children}
            </ModuleProvider>
        </Editor>
    )
}
