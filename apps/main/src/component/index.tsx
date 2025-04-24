import {ReactNode} from "react";
import * as basic from "component-ui/basic";
import Materials from "component-ui";
import {Card} from "antd";
import {Container, ContainerWrap, ModuleProvider, OutContainer, SlotEmpty} from "@brushes/component-core";
import {createStyles} from "antd-style";

import {
    DefaultEventHandlers,
    Editor,
    EditorStore,
    NodeId
} from '@craftjs/core'

const useStyle = createStyles(({ token, css }) => {
    return {
        monitor: css`
            width: 100%;
            .ant-card-body{
                padding: 0;
            }
        `
    }
});

class CustomEventHandlers extends DefaultEventHandlers {
    handlers() {
        const defaultHandlers = super.handlers()

        return {
            ...defaultHandlers,
            // Customize the hover event handler
            hover: (el: HTMLElement, id: NodeId) => {

                console.log(36, el, id)
                const unbindDefaultHoverHandler = defaultHandlers.hover(el, id)

                // Track when the mouse leaves a node and remove the hovered state
                const unbindMouseleave = this.addCraftEventListener(el, 'mouseleave', (e) => {
                    e.craft.stopPropagation()
                    this.options.store.actions.setNodeEvent('hovered', '')
                    console.log(`mouseleave node ${id}`)
                })

                return () => {
                    unbindDefaultHoverHandler();
                    unbindMouseleave();
                }
            }
        }
    }
}

export const WrapContainer = ({children}: {children: ReactNode}) => {
    const { styles } = useStyle();

    return (
        <div className={styles.monitor}>
            <Editor
                handlers={(store: EditorStore) => {
                    console.log(62, store);
                    return new CustomEventHandlers({ store, isMultiSelectEnabled: () => false })
                }}
                enabled={false}
                resolver={{
                    ...basic,
                    ...Materials,
                    Card,
                    OutContainer,
                    SlotEmpty,
                    ContainerWrap,
                    Container,
                }}>
                <ModuleProvider>
                    {children}
                </ModuleProvider>
            </Editor>
        </div>

    )
}