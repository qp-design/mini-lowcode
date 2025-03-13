import {ApplicationContext, Container, HOCCodeWrapComponent} from '@brushes/component-core';
import {Tabs} from 'antd';
import React, {ForwardedRef, useMemo} from 'react';
import {Element} from '@craftjs/core';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const TabJsx =
  React.forwardRef(({columns, tabPosition, ...props} : { columns: any; tabPosition: TabPosition}, ref: ForwardedRef<HTMLDivElement>) => {
    console.log(10, columns);
    const newColumns = useMemo(() => {
      return columns.map((item: any, ind: number) => ({
        ...item,
        children: <ApplicationContext>
          <Element
            canvas
            id={item.key}
            custom={{
              key: ind,
            }}
            is={Container}
          >
          </Element>
        </ApplicationContext>
      }))
    }, [columns])

  return (
    <div ref={ref} ><Tabs tabPosition={tabPosition} items={newColumns} {...props}/></div>
  )
})

export const TabComponent = HOCCodeWrapComponent(TabJsx)

