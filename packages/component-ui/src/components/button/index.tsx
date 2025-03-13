import {HOCCodeWrapComponent} from '@brushes/component-core';
import {Button} from 'antd';
import React, {ForwardedRef} from 'react';


const ButtonJsx =
  React.forwardRef(({text, ...restProps}: { text: string}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Button ref={ref} {...restProps}>{text}</Button>
  )
})

export const ButtonComponent = HOCCodeWrapComponent(ButtonJsx)

