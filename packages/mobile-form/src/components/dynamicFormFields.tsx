import {FieldType, NamePath} from '@/components/types';
import {type FormInstance} from '@nutui/nutui-react-taro';
import {get, isUndefined} from 'lodash';
import {FieldTypeComponent} from './common';
import {useComponent} from "@brushes/simulate-component-mini";

export function dynamicFormFields(
    fields: Array<FieldType>,
    form: FormInstance,
    indx?: number
) {
    const { Form } = useComponent();
    return fields.map(
        (
            {
                name: transformName,
                type,
                extraProps = {},
                calIsVisible = () => true,
                calIsDisabled = () => false,
                ...rest
            }: FieldType,
            idx: number
        ) => {
            const {
                shouldUpdate = false,
                dependencies,
                ...extraPropsRest
            } = extraProps;

            let name = (
                isUndefined(indx) ? transformName : [indx, transformName]
            ) as NamePath;

            const formItemProps: { [k: string]: unknown } = {
                name,
                type,
                dependencies,
                valuePropName: ['checkbox', 'switch'].includes(type)
                    ? 'checked'
                    : 'value',
                ...rest
            };

            const FieldComponent = get(
                FieldTypeComponent,
                type,
                FieldTypeComponent.text
            );

            const content = (
                <FieldComponent
                    name={name}
                    form={form}
                    disabled={calIsDisabled(form)}
                    {...extraPropsRest}
                />
            );

            if(shouldUpdate) {
                return (
                    <Form.Item
                        shouldUpdate={shouldUpdate}
                        key={(name || idx).toString()}
                        noStyle
                    >
                        { () =>
                            calIsVisible(form) ? (
                                <Form.Item {...formItemProps} noStyle={['slot'].includes(type)}>
                                    {content}
                                </Form.Item>
                            ) : null
                        }
                    </Form.Item>
                );
            } else {
                return (
                    <>
                        { calIsVisible(form) ? (
                                <Form.Item {...formItemProps} noStyle={['slot'].includes(type)}>
                                    {content}
                                </Form.Item>
                            ) : null
                        }
                    </>
                );
            }
        }
    );
}