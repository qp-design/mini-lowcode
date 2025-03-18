import {HOCCodeWrapComponent} from '../../tool';
import React, {ReactNode} from 'react';
import {DefaultJsx} from '../default';
import {useEditor, useNode} from '@craftjs/core';
import {Provider} from 'component-store';
import {fullpath} from "@brushes/component-tool";

const Inner = ({children, enabled}: { enabled: boolean; children: ReactNode }) => {

    return <>{children ? children : enabled ? <DefaultJsx/> : ''}</>
}

const ContainerJsx = React.forwardRef(
    ({
         width,
         children,
         background,
            margin,
         backgroundImage,
         marginBottom,
         marginTop,
         ...props
     }: any) => {
        const {enabled} = useEditor(
            (state) => ({
                enabled: state.options.enabled,
            }));

        const {
            connectors: {connect, drag},
        } = useNode();

        return (
            <div
                ref={(ref: HTMLDivElement) => connect(drag(ref))}
                style={{
                    margin: `${marginTop} ${margin} ${marginBottom}`,
                    display: "flex",
                    boxSizing: 'border-box',
                    ...props,
                    background: backgroundImage ? `url(${fullpath(backgroundImage)}) no-repeat center 0` : background,
                    width: (width+'').includes('%') ? width : `${width}px`,
                }}
            >
                <Inner enabled={enabled}>
                    {children ? React.cloneElement(children, props) : children}
                </Inner>
            </div>
        );
    });

const ContainerWrapJsx = React.forwardRef(
    ({
        width,
         background,
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
                    style={{
                        width,
                        background,
                        height: `calc(${height}vh - 110px)`,
                    }}
                >
                    <Inner enabled={enabled}>
                        {children ? React.cloneElement(children, props) : children}
                    </Inner>
                </div>
            </Provider>
        );
    });

export const Container = ContainerJsx;

export const ContainerWrap = HOCCodeWrapComponent(ContainerWrapJsx);
