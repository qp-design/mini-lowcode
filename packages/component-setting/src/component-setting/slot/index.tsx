import {basicSettings, formConfigType} from '@brushes/core-transform';
import {diyFormTransform, formField} from '../../common';


const baseFormField: formConfigType[] = [
  {
    title: '逻辑',
    formFields: formField
  },
  {
    title: '表单值转化',
    formFields: diyFormTransform
  },
]
export const SlotSettings = basicSettings(baseFormField)

