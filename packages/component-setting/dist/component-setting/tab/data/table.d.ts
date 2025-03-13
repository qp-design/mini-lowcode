declare const App: <T extends object>({ onChange, column, ...restProps }: {
    column: T[];
    onChange: (e: any) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default App;
