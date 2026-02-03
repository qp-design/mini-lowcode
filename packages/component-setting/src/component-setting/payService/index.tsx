import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/core-transform-mini';

const containerField: FieldType[] = [

]



const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },

]
export const PayServiceSettings = basicSettings(baseFormField)

