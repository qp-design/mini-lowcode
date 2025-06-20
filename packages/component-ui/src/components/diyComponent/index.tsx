import {HOCCodeWrapComponent} from "@brushes/core-transform";
import React, {ForwardedRef, ReactNode} from 'react';
import {Element} from '@craftjs/core';
import {Slot} from '../slot';

const DiyJsx =
  React.forwardRef(({text, children, ...restProps}:
                      { text: string; children?: ReactNode }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <Element id={'diyComponent'} is={Slot} canvas/>
      </div>
    )
  })

export const DiyComponent = HOCCodeWrapComponent(DiyJsx)
