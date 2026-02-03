import { CompletionContext } from '@codemirror/autocomplete';
export declare function myCompletions(context: CompletionContext): {
    from: any;
    to: number;
    validFor: RegExp;
    options: ({
        label: string;
        type: string;
        detail: string;
        apply: string;
        info?: undefined;
    } | {
        label: string;
        type: string;
        info: string;
        apply: string;
        detail?: undefined;
    })[];
} | null;
