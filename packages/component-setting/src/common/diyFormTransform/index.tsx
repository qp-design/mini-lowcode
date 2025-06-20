import type {FieldType} from "@brushes/form";
import {transformCode, ActionJsx} from "@brushes/component-core";
import {isUndefined} from "lodash-es";

export const diyFormTransform: FieldType[] = [
    {
        label: '表单值转化',
        name: '$_transform',
        type: 'slot',
        extraProps: {
            render({onChange, form, ...restProps}) {
                return <ActionJsx title={'转化项'} onChange={(e) => {
                    if(!isUndefined(e)) {
                        const date = new Date().valueOf()
                        const newCode = transformCode(e as string)
                        form.setFieldValue('$$_transform', newCode);
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
        name: '$$_transform',
        style: {
            display: 'none',
        },
        type: 'text',
    }
]