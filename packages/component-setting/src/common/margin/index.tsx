import {dynamicFormFields, FieldType} from '@brushes/form';

export const formMarginConfig = [
    {
        label: '',
        name: ['margin', 'marginTop'],
        type: 'number',
        extraProps: {
            placeholder: '上',
            style: {width: '100%'},
        }
    },
    {
        label: '',
        name: ['margin', 'marginRight'],
        type: 'number',
        extraProps: {
            placeholder: '右',
            style: {width: '100%'},
        }
    },
    {
        label: '',
        name: ['margin', 'marginBottom'],
        type: 'number',
        extraProps: {
            placeholder: '下',
            style: {width: '100%'},
        }
    },
    {
        label: '',
        name: ['margin', 'marginLeft'],
        type: 'number',
        extraProps: {
            placeholder: '左',
            style: {width: '100%'},
        }
    },
];

export const marginField: FieldType[] = [
    {
        label: '外间距',
        name: ['margin'],
        type: 'slot',
        extraProps: {
            render: ({form}) => {
                return (
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: 10,}}>
                {
                    dynamicFormFields(formMarginConfig, form)
                }
                </div>
            )
            }
        }
    },
]
