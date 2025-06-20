import type {FieldType} from '@brushes/form';
import {basicSettings, formConfigType} from '@brushes/component-tool';

const containerField: FieldType[] = [

]



const baseFormField: formConfigType[] = [
  {
    title: '样式',
    formFields: containerField
  },

]
export const PayServiceSettings = basicSettings(baseFormField)

