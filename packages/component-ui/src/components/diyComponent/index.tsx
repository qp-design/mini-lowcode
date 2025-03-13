import {HOCCodeWrapComponent} from '@brushes/component-core';
import React, {ForwardedRef, ReactNode} from 'react';
import {Element} from '@craftjs/core';
import {SlotComponent} from '../slot';

const DiyJsx =
  React.forwardRef(({text, children, ...restProps}:
                      { text: string; children?: ReactNode }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <Element id={'diyComponent'} is={SlotComponent} canvas/>
      </div>
    )
  })

export const DiyComponent = HOCCodeWrapComponent(DiyJsx)
