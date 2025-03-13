import { createContext, ReactNode, useContext } from 'react';
const Context = createContext({});

export function ApplicationContext({ value, children }: { value?: Object; children: ReactNode }) {
  return <Context.Provider value={{...value}}>{children}</Context.Provider>;
}

export function useApplicationContext() {
  return useContext(Context);
}
