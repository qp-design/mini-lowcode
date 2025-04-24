import {dynamicFormFields, FieldType} from '@brushes/form';

export const formPaddingConfig = [
    {
        label: '',
        name: ['padding', 'paddingTop'],
        type: 'number',
        extraProps: {
            placeholder: '上',
            style: {width: '100%'},
        }
    },
    {
        label: '',
        name: ['padding', 'paddingRight'],
        type: 'number',
        extraProps: {
            placeholder: '右',
            style: {width: '100%'},
        }
    },
    {
        label: '',
        name: ['padding', 'paddingBottom'],
        type: 'number',
        extraProps: {
            placeholder: '下',
            style: {width: '100%'},
        }
    },
    {
        label: '',
        name: ['padding', 'paddingLeft'],
        type: 'number',
        extraProps: {
            placeholder: '左',
            style: {width: '100%'},
        }
    },
];

export const paddingField: FieldType[] = [
    {
        label: '内间距',
        name: ['padding'],
        type: 'slot',
        extraProps: {
            render: ({form}) => {
                return (
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: 10,}}>
                {
                    dynamicFormFields(formPaddingConfig, form)
                }
                </div>
            )
            }
        }
    },
]
