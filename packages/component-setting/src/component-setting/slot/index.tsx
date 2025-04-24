import {basicSettings, formConfigType} from '@brushes/component-core';
import {formField} from '../../common';


const baseFormField: formConfigType[] = [
  {
    title: '逻辑',
    formFields: formField
  },
]
export const SlotSettings = basicSettings(baseFormField)

