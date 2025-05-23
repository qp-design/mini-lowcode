import {Frame} from '@brushes/component-core';
import {WrapContainer} from "../../editor";
import {useQueryInitData} from "component-store";

const I = ({menuOpcode}:{menuOpcode: string}) => {
    useQueryInitData(menuOpcode)
    return (
        <Frame>
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
