import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform';
import {marginField, paddingField} from "../../common";

const containerField: FieldType[] = [
    ...paddingField,
    ...marginField,
    {
        label: '背景色',
        name: 'background',
        type: 'color',
        extraProps: {
            allowClear: true,
            showText: true
        }
    },
    {
        label: '',
        name: 'list',
        type: 'formList',
        extraProps: {
            innerForm: [
                {
                    label: '宽度',
                    type: 'number',
                    name: 'width',
                }
            ]
        }
    }
]

const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },
]
export const CommonItemSettings = basicSettings(baseFormField)

