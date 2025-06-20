import {basicSettings, formConfigType} from '@brushes/core-transform';
import {formField} from '../../common';


const baseFormField: formConfigType[] = [
  {
    title: '逻辑',
    formFields: formField
  },
]
export const SlotSettings = basicSettings(baseFormField)

