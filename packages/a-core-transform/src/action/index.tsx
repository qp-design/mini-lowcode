import {useState} from "react";
import {Button, Modal} from 'antd';
import {EditorMirror, CodeEditor} from "../codeMirror";
import { Extension } from '@uiw/react-codemirror'

export function ActionJsx({onChange, title = '逻辑', defaultCodeInfo, extensions, ...props}: { extensions?: Extension[]; title?: string; defaultCodeInfo?: string; onChange: (e: any) => void; }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const editorRef = useRef(null);
  const [code, setCode] = useState<string>();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    onChange(code)
    setIsModalOpen(false);
  };

  const handleOnChange = (codeStr: string) => {
      setCode(codeStr);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal} type={'primary'}>{title}</Button>
      <Modal width={1000} title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <EditorMirror defaultCode={defaultCodeInfo}  />
          <CodeEditor
              lang="typescript"
              {...props}
              height="500px"
              extensions={extensions}
              minHeight="400px"
              maxHeight="500px"
              onChange={handleOnChange}
              // {...props.codeProps}
           />
      </Modal>
    </>
  );
}