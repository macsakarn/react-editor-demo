import React,{useRef, useState} from 'react'
import Editor from './components/Editor'
import './App.css'

export default function App() {
  const editorRef = useRef(null)
  const [result, setResult] = useState("")

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  function showValue() {
    setResult(editorRef.current?.getValue())
    alert(editorRef.current?.getValue())
  }

  return (
    <div className='root'>
      <div className="header"><span className='text-gradient'>Cloud Code</span> </div>

      <div className="container">
        <div className="editor">
          <Editor handleEditorDidMount={handleEditorDidMount}/>
        </div>
        <div className="runner">{result}</div>
      </div>

      <div className="footer">
        <button className='btn-gradient-border  btn' onClick={showValue}>Run</button>
        <button className='btn-gradient-border  btn'>Upload</button>
        <button className='btn-gradient-border  btn'>Reset</button>
      </div>
    </div>
  )
}
