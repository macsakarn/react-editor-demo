import React, { useRef } from "react";

import Editor from "@monaco-editor/react";

function EditorProxy({handleEditorDidMount}) {

  return (
    <Editor
    theme="vs-dark"
        defaultLanguage="python"
        defaultValue="#Some code"
        onMount={handleEditorDidMount}
      />
  );
}

export default EditorProxy;
