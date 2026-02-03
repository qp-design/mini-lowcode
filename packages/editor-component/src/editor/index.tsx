import {ReactNode} from "react";
import { Components } from '@brushes/core-transform-mini';

import {DynamicForm} from "@brushes/mobile-form";
import {
    Container,
    ContainerWrap,
    IsShowContainer,
    ModuleProvider,
    OutContainer,
    SlotEmpty,
    Editor
} from "@brushes/component-core";

export const WrapContainer = ({children, ...restProps}: { enabled?: boolean; children: ReactNode }) => {
    return (
        <Editor
            enabled={false}
            {...restProps}
            resolver={{
                ...Components,
                // ...hocComponent,
                DynamicForm,
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