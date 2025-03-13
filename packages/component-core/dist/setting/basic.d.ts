import type { FieldType } from '@brushes/form';
export type formConfigType = {
    title?: string;
    formFields: FieldType[];
};
export declare const basicSettings: (formFields: formConfigType[]) => () => import("react/jsx-runtime").JSX.Element;
