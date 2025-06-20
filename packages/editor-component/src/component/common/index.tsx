import {ContainerWrap, Frame} from '@brushes/component-core';
import {WrapContainer} from "../../editor";
import {useQueryInitData} from "component-store";
import {Element} from "@brushes/component-core";

const I = ({menuOpcode}:{menuOpcode: string}) => {
    useQueryInitData(menuOpcode)
    return (
        <Frame>
            <Element
                className={'root-container'}
                canvas
                is={ContainerWrap}
                data-cy="root-container"
            >
            </Element>
        </Frame>
    )
}
export function Common({menuOpcode} : {menuOpcode: string}) {
    return (
        <WrapContainer>
            <I menuOpcode={menuOpcode}/>
        </WrapContainer>
    );
}
