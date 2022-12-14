import React, { useRef } from "react";

import Editor from "@monaco-editor/react";

function EditorProxy({handleEditorDidMount}) {

  return (
    <Editor
    theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
  );
}

export default EditorProxy;
