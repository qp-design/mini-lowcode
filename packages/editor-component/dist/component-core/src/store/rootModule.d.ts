import { ModuleRootState, moduleRootStore } from './rootStore';
type ModuleProviderProps = React.PropsWithChildren<Partial<moduleRootStore>>;
export declare function ModuleRootProvider({ children, ...props }: ModuleProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useModuleRootContext<T>(selector: (state: ModuleRootState) => T): T;
export {};
