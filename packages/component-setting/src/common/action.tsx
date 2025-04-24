import {useState} from "react";
import {Button, Modal} from 'antd';
import {EditorMirror, CodeEditor} from "@brushes/component-core";


export function ActionJsx({onChange, value}: {onChange: (e: any) => void; value: string }) {
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
      <Button onClick={showModal} type={'primary'}>逻辑</Button>
      <Modal width={1000} title="逻辑" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <EditorMirror />
          <CodeEditor
              lang="typescript"
              value={value}
              height="500px"
              minHeight="400px"
              maxHeight="500px"
              onChange={handleOnChange}
              // {...props.codeProps}
           />
      </Modal>
    </>
  );
}