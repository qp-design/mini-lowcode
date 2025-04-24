import { ModuleStore, createModuleStore, ModuleState, moduleStore } from './store'
import { useRef, useContext, createContext } from 'react'
import { useStore } from 'zustand'

const ModuleContext = createContext<ModuleStore | null>(null);

type ModuleProviderProps = React.PropsWithChildren<Partial<moduleStore>>

// Provider wrapper
export function ModuleProvider({ children, ...props }: ModuleProviderProps) {
  const storeRef = useRef<ModuleStore>()

  if (!storeRef.current) {
    storeRef.current = createModuleStore(props)
  }
  return (
    <ModuleContext.Provider value={storeRef.current}>
      {children}
    </ModuleContext.Provider>
  )
}

export function useModuleContext<T>(selector: (state: ModuleState) => T): T {
  const store = useContext(ModuleContext)
  if (!store) throw new Error('Missing ModuleContext.Provider in the tree')
  return useStore(store, selector)
}

// example
// Consumer usage of the custom hook
// function CommonConsumer() {
//   const module_id = useModuleContext((s) => s.module_id)
//   const setModuleId = useModuleContext((s) => s.setModuleId)
//   return (
//     <>
//       <div>{module_id} Bears.</div>
//       <button onClick={setModuleId}>Add bear</button>
//     </>
//   )
// }