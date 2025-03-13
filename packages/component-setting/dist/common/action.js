import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { Button, Modal } from 'antd';
function EditorJsx({ editorRef, value }) {
    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }
    return (_jsx(_Fragment, { children: _jsx(Editor, { height: "60vh", defaultLanguage: "javascript", defaultValue: value, onMount: handleEditorDidMount }) }));
}
function ActionJsx({ onChange, value }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const editorRef = useRef(null);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        onChange(editorRef.current.getValue());
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: showModal, type: 'primary', children: "\u903B\u8F91" }), _jsx(Modal, { width: 1000, title: "\u903B\u8F91", open: isModalOpen, onOk: handleOk, onCancel: handleCancel, children: _jsx(EditorJsx, { value: value, editorRef: editorRef }) })] }));
}
export default ActionJsx;
