import type {FieldType} from "@brushes/form";
import { transformCode } from "@brushes/core-transform";
import { ActionJsx } from "@brushes/core-transform";
import {isUndefined} from "lodash";

export const formField: FieldType[] = [
    {
        label: '自定义组件',
        name: '$_children',
        type: 'slot',
        extraProps: {
            render({onChange, form, ...props}) {
                return <ActionJsx onChange={(e) => {
                    if(!isUndefined(e)) {
                        const date = new Date().valueOf();
                        const newCode = transformCode(e as string)
                        form.setFieldValue('$$_children', newCode);
                        // @ts-ignore
                        console.log('在线编译耗时=========>', new Date().valueOf() - date);
                        onChange(e)
                    }
                }} {...props}/>
            }
        }
    },
    {
        label: '',
        name: '$$_children',
        style: {
            display: 'none',
        },
        type: 'text',
    },
]