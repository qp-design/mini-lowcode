import {dynamicFormFields, FieldType} from '@brushes/form';

export const formMarginConfig = [
    {
        label: '',
        name: ['positionValue', 'top'],
        type: 'number',
        extraProps: {
            placeholder: '上',
            style: {width: '100%'},
        }
    },
    {
        label: '',
        name: ['positionValue', 'right'],
        type: 'number',
        extraProps: {
            placeholder: '右',
            style: {width: '100%'},
        }
    },
    {
        label: '',
        name: ['positionValue', 'bottom'],
        type: 'number',
        extraProps: {
            placeholder: '下',
            style: {width: '100%'},
        }
    },
    {
        label: '',
        name: ['positionValue', 'left'],
        type: 'number',
        extraProps: {
            placeholder: '左',
            style: {width: '100%'},
        }
    },
];

export const positionField: FieldType[] = [
    {
        label: '位置信息',
        name: ['positionValue'],
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
    {
        label: '层级关系',
        name: 'zIndex',
        type: 'number',
    }
]
