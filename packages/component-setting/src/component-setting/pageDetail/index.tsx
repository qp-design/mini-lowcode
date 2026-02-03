import {basicSettings, formConfigType} from '@brushes/core-transform-mini';
import {ApiComponent} from "../../common";


const baseFormField: formConfigType[] = [
  {
    title: '数据源',
    formFields: [
      {
        label: 'api',
        name: 'api',
        type: 'slot',
        extraProps: {
          render: ApiComponent
        }
      },
    ]
  },
]
export const PageDetailComponentSettings = basicSettings(baseFormField)

