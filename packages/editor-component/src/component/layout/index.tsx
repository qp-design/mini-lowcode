import {Frame} from '@brushes/component-core';
import {WrapContainer} from "../../editor";
import {useQueryInitData} from "component-store";

const I = () => {
    useQueryInitData('common')
    return (
        <Frame>
        </Frame>
    )
}
export function Layout() {
    return (
        <WrapContainer>
            <I/>
        </WrapContainer>
    );
}
