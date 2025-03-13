import { FieldType } from '@brushes/form';
import { ColumnGroupType, ColumnType } from 'antd/es/table/interface';
export type atomTypes = 'good' | 'order';
interface DiyColumn {
    type: string;
}
export declare const store: {
    [k in atomTypes]: {
        formConfig: FieldType[];
        tableConfig?: (ColumnGroupType<any> | ColumnType<any> | DiyColumn)[];
    };
};
export declare const storeForm: import("jotai").PrimitiveAtom<{
    good: {
        formConfig: FieldType[];
        tableConfig?: (DiyColumn | ColumnGroupType<any> | ColumnType<any>)[] | undefined;
    };
    order: {
        formConfig: FieldType[];
        tableConfig?: (DiyColumn | ColumnGroupType<any> | ColumnType<any>)[] | undefined;
    };
}> & {
    init: {
        good: {
            formConfig: FieldType[];
            tableConfig?: (DiyColumn | ColumnGroupType<any> | ColumnType<any>)[] | undefined;
        };
        order: {
            formConfig: FieldType[];
            tableConfig?: (DiyColumn | ColumnGroupType<any> | ColumnType<any>)[] | undefined;
        };
    };
};
export declare const formStoreConfigAtom: import("jotai").PrimitiveAtom<never[]> & {
    init: never[];
};
export declare const tableStoreConfigAtom: import("jotai").PrimitiveAtom<never[]> & {
    init: never[];
};
export {};
