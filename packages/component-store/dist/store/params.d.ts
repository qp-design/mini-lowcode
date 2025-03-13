export declare const Provider: ({ children }: {
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useStore: <SelectorOutput>(selector: (store: {
    queryApi: string;
    params: {};
}) => SelectorOutput) => [SelectorOutput, (value: Partial<{
    queryApi: string;
    params: {};
}>) => void];
