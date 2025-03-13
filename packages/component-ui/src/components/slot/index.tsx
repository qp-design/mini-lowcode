import {HOCCodeWrapComponent, SlotEmpty} from '@brushes/component-core';
import React, {ForwardedRef} from 'react';
import {useEditor} from '@craftjs/core';

const SlotJsx =
  React.forwardRef(({text, Children, info, ...restProps}:
                      { text: string; info?: string; Children?: React.FC }, ref: ForwardedRef<HTMLDivElement>) => {
    const {isEnabled} = useEditor(state => ({
      isEnabled: state.options.enabled
    }));

    const emptyRender = isEnabled ? <SlotEmpty/> : null;

    return (
      <div ref={ref}>
         {Children ? <Children {...restProps}/> : emptyRender}
      </div>
    )
  })

export const SlotComponent = HOCCodeWrapComponent(SlotJsx)
