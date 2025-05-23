import {HOCCodeWrapComponent} from "@brushes/component-core";
import {Linear} from "../../common";


const ButtonJsx = (props:any) => {

    return (
        <Linear {...props}/>
    )
}
export const ButtonWrap = HOCCodeWrapComponent(ButtonJsx);