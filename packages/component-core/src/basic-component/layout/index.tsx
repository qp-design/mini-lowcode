//@ts-nocheck
import {Element, useEditor} from '@craftjs/core';
import {HOCCodeWrapComponent} from '../../tool';
import {Container} from '../container';
import React from 'react';
import { DefaultEditorBg } from '../default'

const LayoutJsx = React.forwardRef(({grid, background, padding}:
                                      { background: string; grid: number; padding: number }, ref) => {
  const {isEnabled} = useEditor(state => ({
    isEnabled: state.options.enabled
  }))
  return (
    <div ref={ref}>
      { isEnabled && React.createElement(DefaultEditorBg) }
      <div
        style={{background}}
        className={'grid-wrap'}
      >
        {
          Array(grid).fill(0).map((item, index: number) => (
            <Element
              key={index}
              canvas
              padding={5}
              id={`grid-container-${index}`}
              is={Container}
              data-cy={`grid-container-${index}`}
            />
          ))
        }
      </div>
      { isEnabled && React.createElement(DefaultEditorBg) }
    </div>
  )
})

export const LayoutComponent = HOCCodeWrapComponent(LayoutJsx)

