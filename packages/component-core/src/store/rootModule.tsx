import { ModuleRootStore, createRootModuleStore, ModuleRootState, moduleRootStore } from './rootStore'
import { useRef, useContext, createContext } from 'react'
import { useStore } from 'zustand'

const ModuleContext = createContext<ModuleRootStore | null>(null);

type ModuleProviderProps = React.PropsWithChildren<Partial<moduleRootStore>>

// Provider wrapper
export function ModuleRootProvider({ children, ...props }: ModuleProviderProps) {
    const storeRef = useRef<ModuleRootStore>()

    if (!storeRef.current) {
        storeRef.current = createRootModuleStore(props)
    }

    return (
        <ModuleContext.Provider value={storeRef.current}>
            {children}
        </ModuleContext.Provider>
    )
}

export function useModuleRootContext<T>(selector: (state: ModuleRootState) => T): T {
    const store = useContext(ModuleContext)
    if (!store) throw new Error('Missing ModuleContext.Provider in the tree')
    return useStore(store, selector)
}
