import {CodeEditor} from "../editorCode";

const defaultCodeInfo = `/**
* import { useModuleContext } from '@brushes/component-core'; 当前模块上下文
* const setModuleStore = useModuleContext(s => s.setModuleStore); 当前模块store，访问到store方法
* const moduleStore = useModuleContext(s=> s.moduleStore); 当前模块状态，这里能访问到store状态

* @description: 当前注释的内容仅供提示，不会进行保存。
*/`;


export const EditorMirror = ({defaultCode = defaultCodeInfo}: { defaultCode? : string}) => {
    return (
        <CodeEditor
            editable={false}
            value={defaultCode}
            height="150px"
        />
    )
}