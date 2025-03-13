export interface ExecuteResult {
    value: any;
    error: any;
    success: boolean;
}
export type InjectVMVarsType = Record<string, unknown>;
declare class BrowserRuntimeVM {
    private iframe;
    constructor();
    private executeCode;
    execute(code: string): {
        value: any;
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: unknown;
        value: null;
    };
}
export declare const browserRuntimeVM: BrowserRuntimeVM;
export {};
