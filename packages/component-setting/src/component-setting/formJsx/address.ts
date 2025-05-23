import { FieldType } from '@brushes/form';
import {addressBasicConfig} from "../../common";

export const addressFormField: FieldType[] = [
    ...addressBasicConfig,
    {
        label: '收货人',
        name: 'addressMember',
        type: 'text',
        rules: [{required: true}]
    },
    {
        label: '手机号码',
        name: 'addressPhone',
        type: 'text',
        rules: [{required: true}]
    },
    {
        label: '设为默认',
        name: 'addressDefault',
        type: 'checkbox',
    }
]

