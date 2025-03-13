import { jsx as _jsx } from "react/jsx-runtime";
import { basicSettings } from '@brushes/component-core';
import ActionJsx from '../../common/action';
const actionField = [
    {
        label: '自定义组件',
        name: '$_children',
        type: 'slot',
        extraProps: {
            render({ onChange, value }) {
                return _jsx(ActionJsx, { onChange: onChange, value: value });
            }
        }
    },
];
const baseFormField = [
    {
        title: '逻辑',
        formFields: actionField
    },
];
export const DiyComponentSettings = basicSettings(baseFormField);
