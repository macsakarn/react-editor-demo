import React,{useRef, useState} from 'react'
import Editor from './components/Editor'
import axios from 'axios';
import './App.css'

export default function App() {
  const editorRef = useRef(null)
  const [result, setResult] = useState("")

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  async function showValue() {
    try {
      const response = await axios.post('http://localhost:3000/', {
        script: editorRef.current?.getValue()
      });
     
      setResult(response.data.message)
    } catch (error) {
      console.error(error);
    }
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
        <button className='btn-gradient-border  btn' onClick={()=>window.location.reload(false)}>Reset</button>
      </div>
    </div>
  )
}
