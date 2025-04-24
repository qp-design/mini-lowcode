import CodeMirrorEditor, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { githubLight } from '@uiw/codemirror-theme-github';
import { langs } from '@uiw/codemirror-extensions-langs';
import { javascriptLanguage } from '@codemirror/lang-javascript'
import { css } from "@emotion/css";
import {CompletionContext} from "@codemirror/autocomplete"

const jsSnippets = javascriptLanguage.data.of({
    autocomplete: myCompletions,
})


function myCompletions(context: CompletionContext) {
    let word = context.matchBefore(/\w*/) as any
    if (word.from == word.to && !context.explicit)
        return null
    return {
        from: word.from,
        to: context.pos,
        validFor: /^\w*$/,
        options: [
            {
                label: "路由跳转 | navigator",
                type: "路由跳转 | navi",
                detail: "路由跳转",
                apply: `
/* 导入对应的模块*/
import { useNavigateImpl } from "@brushes/component-tool";

function useDiyHook() {
    /* 自定义hook里面导入 */
    const { navigator } = useNavigateImpl();
    /* @param 路由地址  '/path?a=b&c=d' */
    return () => {
        navigator('/path?a=b&c=d');
    }
}
export default useDiyHook;
                `
            },
            {
                label: "moduleStore",
                type: "store",
                detail: "当前模块的所有状态",
                apply: `
/* 导入对应的模块*/
import { useModuleContext } from "@brushes/component-core";

function useDiyHook() {
    /* 自定义hook里面导入 */
    const moduleStore = useModuleContext(s=> s.moduleStore)
    
    return () => {
        
    }
}
export default useDiyHook;
                `
            },
            {
                label: "moduleStore.defaultValue",
                type: "defaultValue",
                info: "当前模块的默认值",
                apply: `
/* 导入对应的模块*/
import { useModuleContext } from "@brushes/component-core";

function useDiyHook() {
    /* 自定义hook里面导入 */
    const defaultValue = useModuleContext(s=> s.moduleStore.defaultValue)
    
    return () => {
        
    }
}
export default useDiyHook;
                `
            },
            {
                label: "moduleStore.goodNum",
                type: "goodNum",
                info: "当前模块的选择商品数量",
                apply: `
/* 导入对应的模块*/
import { useModuleContext } from "@brushes/component-core";

function useDiyHook() {
    /* 自定义hook里面导入 */
    const goodNum = useModuleContext(s=> s.moduleStore.goodNum)
    
    return () => {
        
    }
}
export default useDiyHook;
                `
            },
            {
                label: "moduleStore.skuInfo",
                type: "skuInfo",
                info: "当前模块的sku商品数据",
                apply: `
/* 导入对应的模块*/
import { useModuleContext } from "@brushes/component-core";

function useDiyHook() {
    /* 自定义hook里面导入 */
    const skuInfo = useModuleContext(s=> s.moduleStore.skuInfo)
    
    return () => {
        
    }
}
export default useDiyHook;
                `
            },
            {
                label: "moduleStore.params",
                type: "params",
                info: "每个模块的请求参数",
                apply: "const params = useModuleContext(s=> s.moduleStore.params)"
            },
            {
                label: "moduleStore.breadList",
                type: "breadList",
                info: "每个模块的面包屑",
                apply: "const breadList = useModuleContext(s=> s.moduleStore.breadList)"
            },
            {
                label: "useModuleContext",
                type: "context",
                detail: "获取当前模块的context",
                apply: "import { useModuleContext } from '@brushes/component-core'"
            }
        ]
    }
}

const calsses = {
    editor: css({
        fontSize: '95%',
        ".cm-editor": {
            outline: "none",
        },
    }),
};

export const CodeEditor: React.FC<ReactCodeMirrorProps> = (props) => {
    return (
        <CodeMirrorEditor
            placeholder="请输入表达式内容"
            className={calsses.editor}
            theme={githubLight}
            basicSetup={{
                lineNumbers: false,
                foldGutter: false,
                highlightActiveLine: false,
                tabSize: 2
            }}
            extensions={[langs.tsx(), jsSnippets]}
            {...props}
        />
    );
};
