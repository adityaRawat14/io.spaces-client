"use client"
import React from "react";
import dynamic from "next/dynamic";
import FilesHeader from "../editor/FilesHeader";
import { IoLogoJavascript } from "react-icons/io";

const Editor = dynamic(() => import("../editor/Editor"));

interface JsEditorProps{
  jsCode:string,
  onJsCodeChange:(e:any)=>void
  onCodeExecute:any
}

function JsEditor({jsCode , onJsCodeChange,onCodeExecute}:JsEditorProps) {
  const [selectedFile, setSelectedFile] = React.useState("index.js");
  const files=[{ name: "index.js", icon: IoLogoJavascript, language: "js" }];




  return (
    <div className="bg-[#1E1E1E]">
     <FilesHeader
       files={files}
        selectedFile={selectedFile}
        onCodeExecute={onCodeExecute}
      />
      <Editor
        height="100vh"
        onChange={onJsCodeChange}
        width="70vw"
        language="javascript"
        value={jsCode}
      />
    </div>
  );
}

export default JsEditor;
