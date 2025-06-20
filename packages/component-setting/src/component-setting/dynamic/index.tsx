import {basicSettings, formConfigType} from '@brushes/core-transform';
import {diyFormConfig} from "../../common";

const baseFormField: formConfigType[] = [
    {
        title: '配置项',
        formFields: diyFormConfig
    },
]

export const DynamicComponentSettings = basicSettings(baseFormField, 'vertical')
