import {basicSettings, formConfigType} from '@brushes/component-tool';
import {diyFormConfig} from "../../common";

const baseFormField: formConfigType[] = [
    {
        title: '配置项',
        formFields: diyFormConfig
    },
]

export const DynamicComponentSettings = basicSettings(baseFormField, 'vertical')
