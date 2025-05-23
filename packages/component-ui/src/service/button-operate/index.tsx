import {HOCCodeWrapComponent, useModuleContext} from "@brushes/component-core";
import {ButtonComponent} from "../../basic";


const ButtonWrap = ({openKey, ...restProps}: {openKey:string}) => {
    const setModuleStore = useModuleContext(s=> s.setModuleStore);
    const add = () => {
        if(openKey) {
            setModuleStore({
                formEditorId: '',
                title: '新增收货地址',
                [openKey]: true
            })
        }
    }

    return (
        <ButtonComponent openKey={'addressOpen'} onClick={add} text={'新增收货地址'} danger type={'link'} {...restProps}/>
    )
}
export const ButtonOperate = HOCCodeWrapComponent(ButtonWrap);