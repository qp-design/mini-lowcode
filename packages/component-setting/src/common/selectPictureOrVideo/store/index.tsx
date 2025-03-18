import { createContext, ReactNode, useContext } from 'react';

export const Context = createContext('');

export function ContextProvider({
  initialValue,
  children
}: {
  initialValue: string;
  children: ReactNode;
}) {
  return <Context.Provider value={initialValue}>{children}</Context.Provider>;
}

export function useFileContext() {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useFileContext必须在ContextProvider中使用');
  }
  return context;
}
