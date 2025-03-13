/**
 * @param {param} store里面数据的对应key
 * @param {activeModule} Form改变此列的值
 * @param {initialValue} Form表单列默认数据
 * @param {title} column的name
 * @param {id} column的key
 * @param {onChange} Form改变数据方法
 */
interface WrapTableType<T> {
    param: string;
    activeModule: string;
    initialValue: Array<T>;
    title: string;
    id: string;
    onChange: (e: any) => void;
}
export declare const WrapTable: <T extends object>({ activeModule, onChange, param, title, id, initialValue }: WrapTableType<T>) => import("react/jsx-runtime").JSX.Element;
export {};
