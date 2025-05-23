import {ConfigProvider, Form} from 'antd';
import {useForm} from "antd/es/form/Form";
import {Element} from "@craftjs/core";
import {Container, HOCCodeWrapComponent} from "@brushes/component-core";
import { createStyles } from 'antd-style';
import {AccountBuyComponent} from "../../service";

const useStyle = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const FormWrap = (
    {
        name = 'basic',
        padding,
        margin,
        layout = 'horizontal',
        children
    }: any
) => {
    const { styles } = useStyle();
    const [form] = useForm();

    return (
        <div style={{
            ...padding,
            ...margin
        }}>
            <Form
                {...{
                    layout,
                    form,
                    name,
                }}
            >
                <Element canvas text={'表单内容放置区域'} is={Container} id={'form-container-address'}>

                </Element>

                <Form.Item label=" " colon={false}>
                    <ConfigProvider
                        button={{
                            className: styles.linearGradientButton,
                        }}
                    >
                            <Element
                                justifyContent='flex-end'
                                flexDirection={'row'}
                                canvas
                                text={'表单按钮放置区域'}
                                id={'button-submit'}
                                is={Container}
                            >
                                <AccountBuyComponent
                                    saveText={'提交订单'}
                                    transformSubmitDataConfig={[
                                        {
                                            type: 'file',
                                            name: ''
                                        }
                                    ]}
                                />
                            </Element>
                   </ConfigProvider>
                </Form.Item>

            </Form>
        </div>

    )
}


export const FormComponent = HOCCodeWrapComponent(FormWrap);
