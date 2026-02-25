import ReactFrameComponent, {
    FrameContextConsumer,
} from "react-frame-component";
import {ReactNode, useRef} from "react";

import {createStyles} from "antd-style";
import {WrapContainer} from "@/pages";

const useStyle = createStyles(({css}) => {
    return {
        iframe: css`
            border: none;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        `
    }
})

export const IframeComponent = ({children}: {children: ReactNode}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const {styles} = useStyle();
    return (
        <ReactFrameComponent
            id={'__QJ__LOWCODE__'}
            ref={iframeRef}
            className={styles.iframe}
        >
            <FrameContextConsumer>
                {({document: _document}) => {
                    return (
                        <>
                            <WrapContainer>
                                {children}
                            </WrapContainer>
                        </>
                    );
                }}
            </FrameContextConsumer>
        </ReactFrameComponent>
    )
}