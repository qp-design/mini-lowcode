export declare function transformCode(source: string): string;
export declare function changeCode(code: string): {
    exports: {
        __esModule: boolean;
        default: unknown;
    };
} | (() => import("react/jsx-runtime").JSX.Element);
/**
 *
 * @param code cjs代码
 * @param dependencies 模块依赖
 */
export declare const compileModuleResolve: (code: string, dependencies?: Record<string, any>) => ESMoudleType;
/**
 * sucrase 编译器
 * @param code 需要编译的代码,
 */
export declare const sucraseTransformCode: (code: string) => Promise<string>;
