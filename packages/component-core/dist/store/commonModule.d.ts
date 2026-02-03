import { ModuleState, moduleStore } from './commonStore';
type ModuleProviderProps = React.PropsWithChildren<Partial<moduleStore>>;
export { initialValueOrder } from './commonStore';
export declare function ModuleProvider({ children, ...props }: ModuleProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useModuleContext<T>(selector: (state: ModuleState) => T): T;
