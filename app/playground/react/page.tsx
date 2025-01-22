"use client"
import ReactEditor from '@/components/react-playground/ReactEditor';
import React, { use, useState } from 'react'
import dynamic from 'next/dynamic';
import useDebounce from '@/hooks/useDebounce';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
const ReactOutput = dynamic(() => import('../../../components/react-playground/ReactOutput'), {
  ssr: false, 
});

function page() {
  const [cssCode,setCssCode]=useState(``)
  const [reactCode,setReactCode] = useState(`

// do not use any import statements , this is just for playing around react components



function App() {
  const [name,setName]=React.useState('aman')
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>{name}</p>
    </div>
  );
}

`);

const onReactCodeChange=(e:any)=>{
  console.log('changing react code , ',e);
  
  setReactCode(e);
}

const onCssChange=(e:any)=>{
setCssCode(e)
}

const debouncedReactCode=useDebounce(reactCode,1500);
const debouncedCssCode=useDebounce(cssCode,1500)


  return (
    <ResizablePanelGroup
    direction="horizontal"
    className="h-screen"
  >
    <ResizablePanel defaultSize={70} minSize={50} maxSize={70}>
 <ReactEditor onReactCodeChange={onReactCodeChange}  reactCode={reactCode} cssCode={cssCode} onCssChange={onCssChange} />
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={30} maxSize={50} minSize={30}>
      <ReactOutput reactCode={debouncedReactCode} cssCode={debouncedCssCode} />
    </ResizablePanel>
  </ResizablePanelGroup>
  )
}

export default page