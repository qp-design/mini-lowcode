import type {FieldType} from "@brushes/form";
export const borderWidthHeight : FieldType[] = [
    {
        label: '宽度',
        name: 'width',
        type: 'number',
    },
    {
        label: '高度',
        name: 'height',
        type: 'number',
    },
    {
        label: '描边颜色',
        name: 'borderColor',
        type: 'color',
        extraProps: {
            allowClear: true,
        }
    },
    {
        label: '描边大小',
        name: 'borderSize',
        type: 'number',
    },
    {
        label: '圆角',
        name: 'borderRadius',
        type: 'number',
    },
]