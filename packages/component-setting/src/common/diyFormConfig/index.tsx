import type {FieldType} from "@brushes/form";
import {transformCode} from "@brushes/component-core";
import { ActionJsx } from "@brushes/component-tool";
import {isUndefined} from "lodash-es";

export const diyFormConfig: FieldType[] = [
    {
        label: '自定义配置项',
        name: '$_formConfig1',
        type: 'slot',
        extraProps: {
            render({onChange, form, ...restProps}) {
                return <ActionJsx title={'配置项'} onChange={(e) => {
                    if(!isUndefined(e)) {
                        const date = new Date().valueOf()
                        const newCode = transformCode(e as string)
                        form.setFieldValue('$$_formConfig1', newCode);
                        // @ts-ignore
                        console.log('在线编译耗时=========>', new Date().valueOf() - date);
                        onChange(e)
                    }
                }} {...restProps}/>

            }
        }
    },
    {
        label: '',
        name: '$$_formConfig1',
        style: {
            display: 'none',
        },
        type: 'text',
    }
]