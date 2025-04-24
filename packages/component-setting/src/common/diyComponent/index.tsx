import type {FieldType} from "@brushes/form";
import {ActionJsx} from "../action";
import {transformCode} from "@brushes/component-core";

export const formField: FieldType[] = [
    {
        label: '自定义组件',
        name: '$_children',
        type: 'slot',
        extraProps: {
            render({onChange, value, form}) {
                return <ActionJsx onChange={(e) => {
                    const date = new Date().valueOf()
                    const newCode = transformCode(e as string)
                    form.setFieldValue('$$_children', newCode);
                    // @ts-ignore
                    console.log('在线编译耗时=========>', new Date().valueOf() - date);
                    onChange(e)
                }} value={value}/>
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