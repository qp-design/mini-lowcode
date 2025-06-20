import type {FieldType} from "@brushes/form";
import {transformCode} from "@brushes/component-core";
import { ActionJsx } from "@brushes/component-tool";
import {isUndefined} from "lodash-es";

export const actionField: FieldType[] = [
    {
        label: '逻辑',
        name: '$_actions',
        type: 'slot',
        extraProps: {
            render({onChange, form, ...restProps}) {
                return <ActionJsx onChange={(e) => {
                    if(!isUndefined(e)) {
                        const date = new Date().valueOf()
                        const newCode = transformCode(e as string)
                        form.setFieldValue('$$_actions', newCode);
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
        name: '$$_actions',
        style: {
            display: 'none',
        },
        type: 'text',
    }
]