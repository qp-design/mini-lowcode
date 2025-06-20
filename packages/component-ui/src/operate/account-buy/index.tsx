import { HOCCodeWrapComponent} from "@brushes/component-core";
import {formatList, useOrderPay} from "component-store";
import { ButtonComponent } from "../../basic";
import {useMemo} from "react";
import {get} from "lodash-es";
import {useFormImpl} from "@brushes/form";
import {Form} from "antd";


const AccountBuy = ({  saveText, transformSubmitDataConfig = [] }: {saveText: string; transformSubmitDataConfig?: Array<{
        type: string;
        name: string;
    }>}) => {
    const form = Form.useFormInstance();

    const transformDataConfig = useMemo(() => {
        return transformSubmitDataConfig.map(item => {
            const func = get(formatList, item.type, formatList['basic']);
            return func(item.name);
        })
    }, [transformSubmitDataConfig]);

    const {
        handlerSubmit,
    } = useFormImpl(form, () => {}, transformDataConfig);

    const {onSubmit, loading} = useOrderPay();

    return (
        <ButtonComponent
            width={180}
            height={46}
            text={saveText}
            onClick={handlerSubmit.bind(null, saveText, true, onSubmit)}
            // icon={<PayCircleOutlined />}
            size={'large'}
            disabled={false}
            loading={loading}
            type="primary"
        >
        </ButtonComponent>
    );
};

export const AccountBuyComponent = HOCCodeWrapComponent(AccountBuy)