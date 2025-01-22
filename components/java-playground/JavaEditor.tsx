"use client"
import React from "react";
import dynamic from "next/dynamic";
import { FaJava } from "react-icons/fa";
import FilesHeader from "../editor/FilesHeader";
import { executeCode } from "@/lib/executer/code-executer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setJavaCodeOutput,
  setIsExecuting,
  setJavaCode,
  setJavaError,
} from "@/store/features/code-editor/javaSlice";
const Editor = dynamic(() => import("../editor/Editor"));

function JavaEditor() {
  const [selectedFile, setSelectedFile] = React.useState("Main.java");
  const files=[{ name: "Main.java", icon: FaJava, language: "java" }];
  const dispatch = useAppDispatch();
  const javaCode = useAppSelector((state) => state.java.code);
  const onJavaCodeChange = (e: any) => {
    dispatch(setJavaCode(e));
  };


  const onJavaCodeExecute = async () => {
    dispatch(setJavaError(null))
    dispatch(setIsExecuting(true));
    try {
      const executionResult = await executeCode(javaCode, "java");
      dispatch(setJavaCodeOutput(executionResult));
    } catch (error:any) {
      if(error instanceof Error){
        dispatch(setJavaError(error.message))
      }else{
        dispatch(setJavaError("Unknown network error !"))
      }
    }
    dispatch(setIsExecuting(false));
  };

  return (
    <div className="bg-[#1E1E1E]">
      <FilesHeader
       files={files}
        selectedFile={selectedFile}
        onCodeExecute={onJavaCodeExecute}
      />
      <Editor
        height="100vh"
        onChange={onJavaCodeChange}
        width="70vw"
        language="java"
        value={javaCode}
      />
    </div>
  );
}

export default JavaEditor;
