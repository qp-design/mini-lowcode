import {ContainerWrap, Frame, Element} from '@brushes/component-core';
import {WrapContainer} from "../../editor";
import {useQueryInitData} from "@brushes/component-store-web";
import {useComponent} from "@brushes/simulate-component-mini";

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
    const { SafeArea } = useComponent();

    return (
        <>
            <WrapContainer>
                <I menuOpcode={menuOpcode}/>
            </WrapContainer>
            <SafeArea position="bottom" />
        </>
    );
}
