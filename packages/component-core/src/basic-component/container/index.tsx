import {HOCCodeWrapComponent} from '../../tool';
import React, {ReactNode} from 'react';
import {DefaultJsx} from '../default';
import {useEditor} from '@craftjs/core';
import {Provider} from 'component-store';
import {Resizer} from "../resizer";

const Inner = ({children, enabled}: { enabled: boolean; children: ReactNode }) => {

  return <>{children ? children : enabled ? <DefaultJsx/> : ''}</>
}

const ContainerJsx = React.forwardRef(
  ({
     background,
     padding,
     width,
     children,
     height,
     ...props
   }: any, connect) => {
    const {enabled} = useEditor(
      (state) => ({
        enabled: state.options.enabled,
      }));

    return (
        <Resizer>
        <div
            {...props}
            ref={connect}
            style={{
              padding: `${padding}px`,
              height: height,
              background, width: `calc(${width}% - ${2 * padding}px)`
            }}
          >
            <Inner enabled={enabled}>
               { children ? React.cloneElement(children, props) : children }
            </Inner>
          </div>
        </Resizer>
    );
  });

const ContainerWrapJsx = React.forwardRef(
    ({
         background,
         padding,
         width,
         children,
         height,
         ...props
     }: any, connect) => {

        const {enabled} = useEditor(
            (state) => ({
                enabled: state.options.enabled,
            }));

        return (
            <Provider>
                <div
                    {...props}
                    ref={connect}
                    style={{
                        padding: `${padding}px`,
                        height: `calc(${height}vh - ${2 * padding}px - 140px)`,
                        background,
                        width: `calc(${width}% - ${2 * padding}px)`
                    }}
                >
                    <Inner enabled={enabled}>
                        { children ? React.cloneElement(children, props) : children }
                    </Inner>
                </div>
            </Provider>
        );
    });

export const Container = HOCCodeWrapComponent(ContainerJsx);

export const ContainerWrap = HOCCodeWrapComponent(ContainerWrapJsx);
