import {ReactNode, useMemo} from 'react';
import {DefaultJsx} from '../default';
import {fullpath} from "@brushes/component-tool";
import { createStyles } from "antd-style";
import {useEditor, useNode} from "@craftjs/core";
import {ModuleProvider} from "../../store";

const useStyles = createStyles(({token, css}) => {
    return {
        category: css`
            &:hover{
                box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
            }
        `,
        width_100: css`
            width: 100%;
        `
    }
})
export const Inner = ({children, enabled, root}: { root?: boolean; enabled: boolean; children: ReactNode }) => {
    return (
        <>{children ? children : enabled ? <DefaultJsx root={root}/> : ''}</>
    )
}

export const Container =
    ({
         width,
         children,
         background,
         margin = {},
         positionValue = {},
         padding = {},
         backgroundImage,
         position,
         borderColor,
         ...props
     }: any) => {
        const { styles } = useStyles();
        const {enabled} = useEditor(
            (state) => ({
                enabled: state.options.enabled,
            }));
        //为了右边贴边位置特殊处理
        const positionNewValue = useMemo(() => {
            if(position === 'fixed' && positionValue.right === 0 && enabled) {
                return {
                    ...positionValue,
                    right: 412
                };
            }
            if(position === 'fixed' && positionValue.left === 0 && enabled) {
                return {
                    ...positionValue,
                    left: 172
                };
            }
            return positionValue;
        }, [positionValue, position]);
        const {
            connectors: {connect, drag},
        } = useNode();

        return (
            <div
                className={enabled? styles.category: ''}
                ref={(ref: HTMLDivElement) => connect(drag(ref))}
                style={{
                    ...margin,
                    display: "flex",
                    boxSizing: 'border-box',
                    position,
                    border: `solid 1px ${borderColor}`,
                    ...padding,
                    ...props,
                    ...positionNewValue,
                    background: backgroundImage ? `url(${fullpath(backgroundImage)}) repeat-x center 0` : background,
                    width: (width+'').includes('%') ? width : `${width}px`,
                }}
            >
                <Inner enabled={enabled}>
                    {children}
                </Inner>
            </div>
        );
    };

export const OutContainerComponent =
    ({
         width,
         api,
         params,
         children,
         background,
         padding = {},
         backgroundImage,
         ...props
     }: any) => {
        const {enabled} = useEditor(
            (state) => ({
                enabled: state.options.enabled,
            }));

        const {
            connectors: { connect, drag },
        } = useNode();

        const { styles } = useStyles();
        return (
                <div
                    ref={(ref: HTMLDivElement) => connect(drag(ref))}
                    className={enabled? styles.category: ''}
                    style={{
                        margin: '0 auto',
                        display: "flex",
                        boxSizing: 'border-box',
                        ...padding,
                        ...props,
                        background: backgroundImage ? `url(${fullpath(backgroundImage)}) repeat-x center 0` : background,
                        width: (width+'').includes('%') ? width : `${width}px`,
                    }}
                >
                    <Inner enabled={enabled}>
                        {children}
                    </Inner>
                </div>
        );
    };

export const OutContainer = (props:any) => {
    return (
        <ModuleProvider>
            <OutContainerComponent {...props}/>
        </ModuleProvider>
    );
}
export const ContainerWrap = ({
         width,
         background,
         children,
         height,
         ...props
     }: any) => {

    const {
        connectors: { connect, drag },
    } = useNode();

    const {enabled} = useEditor(
        (state) => ({
            enabled: state.options.enabled,
        }));
        return (
                <div
                    {...props}
                    ref={(ref: HTMLDivElement) => connect(drag(ref))}
                    style={{
                        width,
                        background,
                        minHeight: `calc(${height}vh - 110px)`,
                    }}
                >
                    <Inner root={true} enabled={enabled}>
                        {children}
                    </Inner>
                </div>
        );
    };
