import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import { TbBrandCpp } from 'react-icons/tb';
import FilesHeader from '../editor/FilesHeader';
import { executeCode } from '@/lib/executer/code-executer';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCppCode, setCppCodeOutput, setCppError } from '@/store/features/code-editor/cppSlice';
import { setIsExecuting } from '@/store/features/code-editor/cppSlice';
const Editor=dynamic(()=>import('../editor/Editor'))



function CppEditor() {
    const files = [{ name: "Main.cpp", icon: TbBrandCpp , language: "cpp" }    ];
    const [selectedFile,setSelectedFile] = useState('Main.cpp')


  const dispatch = useAppDispatch();
  const cppCode = useAppSelector((state) => state.cpp.code);
  const onCppCodeChange = (e: any) => {
    dispatch(setCppCode(e));
  };


  const onCppCodeExecute = async () => {
    dispatch(setCppError(null))
    dispatch(setIsExecuting(true));
    try {
      const executionResult = await executeCode(cppCode, "cpp");
      dispatch(setCppCodeOutput(executionResult));
    } catch (error:any) {
      if(error instanceof Error){
             dispatch(setCppError(error.message))
           }else{
             dispatch(setCppError("Unknown network error !"))
           }
    }
    dispatch(setIsExecuting(false));
  };

  return (
   <div className='bg-[#1E1E1E]'>
    <div className='bg-gray-800' >
    <FilesHeader  files={files} selectedFile={selectedFile} onCodeExecute={onCppCodeExecute}/>
    </div>
    <Editor 
     height='100vh' 
     onChange={onCppCodeChange}
     width='70vw'
     language='cpp'
     value={cppCode}
    />
  

   </div>
  )
}

export default CppEditor