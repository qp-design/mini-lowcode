import type { FieldType } from '@brushes/form';
export type formConfigType = {
    title?: string;
    formFields: FieldType[];
};
export type LayoutType = 'horizontal' | 'vertical' | 'inline';
export declare const basicSettings: (formFields: formConfigType[], layout?: LayoutType) => () => import("react/jsx-runtime").JSX.Element;
