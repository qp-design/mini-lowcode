import {Container, useModuleContext, Element, useEditor} from "@brushes/component-core";
import { Drawer as Drawer2 } from 'antd';

export const Drawer = ({code, ...restProps}: {code: string}) => {
    const {enabled } = useEditor(
        (state) => ({
            enabled: state.options.enabled,
        }));

    const open = useModuleContext(s => s.moduleStore[code]);

    const title = useModuleContext(s => s.moduleStore.title);
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    // const params = useModuleContext(s=>s.moduleStore.params);
    const onClose = () => {
        setModuleStore({
            [code]: false
        })
    }
    return (
        <Drawer2
            {...enabled ? { getContainer: false } : {}}
            title={title}
            {...restProps}
            mask={!enabled}
            onClose={onClose}
            open={enabled || open}>
            <Element
                canvas
                id={'drawer'}
                is={Container}
            >
            </Element>
        </Drawer2>
    )
}