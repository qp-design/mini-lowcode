import { ReactNode } from "react";
import * as Components from "@brushes/lowcode-component-ui";

import { DynamicForm } from "@brushes/mobile-form-mini";
import {
  Container,
  ContainerWrap,
  IsShowContainer,
  ModuleProvider,
  OutContainer,
  SlotEmpty,
  Editor,
} from "@brushes/component-core-mini";

export const WrapContainer = ({
  children,
  ...restProps
}: {
  enabled?: boolean;
  children: ReactNode;
}) => {
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
        IsShowContainer,
      }}
    >
      <ModuleProvider>{children}</ModuleProvider>
    </Editor>
  );
};
