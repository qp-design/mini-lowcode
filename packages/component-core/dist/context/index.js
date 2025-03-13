import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const Context = createContext({});
export function ApplicationContext({ value, children }) {
    return _jsx(Context.Provider, { value: Object.assign({}, value), children: children });
}
export function useApplicationContext() {
    return useContext(Context);
}
