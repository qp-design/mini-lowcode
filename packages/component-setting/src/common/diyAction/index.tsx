import type {FieldType} from "@brushes/form";
import {ActionJsx} from "../action";
import {transformCode} from "@brushes/component-core";

export const actionField: FieldType[] = [
    {
        label: '逻辑',
        name: '$_actions',
        type: 'slot',
        extraProps: {
            render({onChange, form, value}) {
                return <ActionJsx onChange={(e) => {
                    const date = new Date().valueOf()
                    const newCode = transformCode(e as string)
                    form.setFieldValue('$$_actions', newCode);
                    console.log(16, newCode);
                    // @ts-ignore
                    console.log('在线编译耗时=========>', new Date().valueOf() - date);
                    onChange(e)
                }} value={value}/>

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
    },
]