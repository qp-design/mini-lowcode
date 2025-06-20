import {HOCCodeWrapComponent, useModuleContext} from "@brushes/component-core";
import {useSaveOperate} from "component-store";
import { ButtonComponent } from "../../basic";
import {TransformType, useFormImpl} from "@brushes/form";
import {Form} from "antd";
import {noop} from "lodash-es";
import {useApiParam} from "@brushes/component-tool";


const SaveOperate = ({ text, api, preKey = '', retryKey = 'retry', params, transformDataConfig = [], openKey, ...restProps } : {
    params?: Array<{ key: string; value: string;}>;
    preKey?:string;
    retryKey?: string;
    openKey:string;
    api: string;
    text: string;
    transformDataConfig?: Array<TransformType>
}) => {

    const form = Form.useFormInstance();
    const retry = useModuleContext(s => s.moduleStore[retryKey]) || noop;
    const resetProps = useApiParam(params);
    const {
        handlerSubmit,
        inProgressStatus
    } = useFormImpl(form, () => {}, transformDataConfig);

    const {onSubmit} = useSaveOperate(api, openKey, retry, resetProps, preKey);

    return (
        <ButtonComponent
            loading={inProgressStatus[text]}
            text={text}
            onClick={handlerSubmit.bind(null, text, true, onSubmit)}
            {...restProps}
        >
        </ButtonComponent>
    );
};

export const SaveOperateComponent = HOCCodeWrapComponent(SaveOperate)