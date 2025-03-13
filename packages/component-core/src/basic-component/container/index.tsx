import {HOCCodeWrapComponent} from '../../tool';
import React, {ReactNode, useEffect} from 'react';
import {DefaultJsx} from '../default';
import {useEditor} from '@craftjs/core';
import {Provider, useStore, WrapReactQuery} from 'component-store';

const Inner = ({children, enabled, api}: { api: string; enabled: boolean; children: ReactNode }) => {
  const [, setApi] = useStore(state => state['queryApi']);
  useEffect(() => {
    setApi({
      queryApi: api
    });
  }, [api])
  console.log(322, children);

  return <>{children ? children : enabled ? <DefaultJsx/> : ''}</>
}

const ContainerJsx = React.forwardRef(
  ({
     background,
     api,
     padding,
     width,
     children,
     ...props
   }: any, connect) => {
    const {enabled} = useEditor(
      (state) => ({
        enabled: state.options.enabled,
      }));

    return (
      <WrapReactQuery>
        <Provider>
          <div
            {...props}
            ref={connect}
            style={{
              padding: `${padding}px`,
              background, width: `calc(${width}% - ${2 * padding}px)`
            }}
          >
            <Inner enabled={enabled} api={api}>
               { children ? React.cloneElement(children, props) : children }
              {/*{children}*/}
            </Inner>
            {/*{*/}
            {/*  enabled && React.createElement('div', {*/}
            {/*    style: { height: 20, background: '#efefef'}*/}
            {/*  }, '')*/}
            {/*}*/}
          </div>
        </Provider>
      </WrapReactQuery>
    );
  });

export const Container = HOCCodeWrapComponent(ContainerJsx);
