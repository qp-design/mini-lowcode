import {Ref, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import {Button, Modal} from 'antd';
function EditorJsx({editorRef, value}: { editorRef: Ref<any>; value: string}) {
  function handleEditorDidMount(editor:string, monaco: any) {
    editorRef.current = editor;
  }

  return (
    <>
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        defaultValue={value}
        onMount={handleEditorDidMount}
      />
    </>
  )
}
function ActionJsx({onChange, value}: {onChange: (e: any) => void; value: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const editorRef = useRef(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    onChange(editorRef.current.getValue())
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal} type={'primary'}>逻辑</Button>
      <Modal width={1000} title="逻辑" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <EditorJsx value={value} editorRef={editorRef} />
      </Modal>
    </>
  );
}

export default ActionJsx;
