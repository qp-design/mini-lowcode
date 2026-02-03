import { ReactNode } from 'react';
export declare const Inner: ({ children, enabled, root, text }: {
    text?: string;
    root?: boolean;
    enabled: boolean;
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const IsShowContainer: ({ moduleShowValue, rootKey, isRevert, children, routerIsShowValue, routerIsShow, moduleIsShow, padding, storeKey, margin }: {
    isRevert?: boolean;
    routerIsShowValue?: string;
    rootKey?: string;
    moduleShowValue?: string;
    moduleIsShow?: string;
    routerIsShow?: string;
    storeKey: string;
    padding: object;
    margin: object;
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element | undefined;
export declare const Container: ({ width, text, children, background, margin, positionValue, padding, backgroundImage, position, $$_actions, $_actions, borderColor, ...props }: any) => import("react/jsx-runtime").JSX.Element;
export declare const OutContainerComponent: ({ width, api, params, children, background, padding, backgroundImage, ...props }: any) => import("react/jsx-runtime").JSX.Element;
export declare const OutContainer: (props: any) => import("react/jsx-runtime").JSX.Element;
export declare const ContainerWrap: ({ width, background, children, backgroundImage, height, $$_style, $_style, ...props }: any) => import("react/jsx-runtime").JSX.Element;
