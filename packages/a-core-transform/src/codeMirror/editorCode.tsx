import CodeMirrorEditor, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { githubLight } from '@uiw/codemirror-theme-github';
import { langs } from '@uiw/codemirror-extensions-langs';
import { javascriptLanguage } from '@codemirror/lang-javascript';
import { createStyles } from 'antd-style';
import { myCompletions } from './myCompletions';

const jsSnippets = javascriptLanguage.data.of({
  autocomplete: myCompletions
});

const useStyle = createStyles(({ token, css }) => {
  return {
    editor: css`
      font-size: 95%;
      font-family:
        'acumin-pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        sans-serif !important;
      .cm-editor {
        outline: none;
      }
    `
  };
});

export const CodeEditor: React.FC<ReactCodeMirrorProps> = ({ extensions, ...props }) => {
  const { styles } = useStyle();
  return (
    <CodeMirrorEditor
      placeholder="请输入表达式内容"
      className={styles.editor}
      theme={githubLight}
      basicSetup={{
        lineNumbers: false,
        foldGutter: false,
        highlightActiveLine: false,
        tabSize: 2
      }}
      extensions={extensions ? [extensions[0], jsSnippets] : [langs.tsx(), jsSnippets]}
      {...props}
    />
  );
};
