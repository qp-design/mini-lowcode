import {Container} from '@brushes/component-core';
import {Tabs} from 'antd';
import {useMemo} from 'react';
import {Element} from '@brushes/component-core';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

export const Tab =
  ({columns, tabPosition, destroyOnHidden, ...props} : { destroyOnHidden: boolean; columns: any; tabPosition: TabPosition}) => {
    const newColumns = useMemo(() => {
      return columns.map(({label, key}: any, ind: number) => {
          return {
              key,
              label: <span style={props}>{label}</span>,
              children: (
                  <Element
                      canvas
                      id={key}
                      is={Container}
                  >
                  </Element>
              )
          }
      })
    }, [columns])

        return (
            <Tabs destroyOnHidden={destroyOnHidden} tabPosition={tabPosition} items={newColumns}/>
        )
    }