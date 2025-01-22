  "use client"
import React, { useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import JsEditor from "@/components/javascript-playground/JsEditor";
import JsOutput from "@/components/javascript-playground/JsOutput";

export type JsOutputType={
  message:string , 
  type : 'warn' | 'log' | 'error' | 'none'
}

function Page() {
 const [jsCode,setJsCode]=useState<string>(`console.log("Hello world")`)
  const onJsCodeChange=(e:any)=>{
    setJsCode(e)
  }

  
  const iframeRef = useRef<HTMLIFrameElement>(null)
  // |%%|%%|  this was the seperator used for seperating the message and the type of the message , 

  const [output, setOutput] = useState<JsOutputType[] | any[]>([])
  const splitBar="|%%|%%|"

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'string') {
        const [eventMsgType , msgData]= event.data.split(splitBar)

        setOutput(prevOutput => [...prevOutput , {message:msgData,type:eventMsgType}])
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const onCodeExecute = () => {
    if(jsCode.trim().length==0) return ;
    if (iframeRef.current) { 
      const iframe = iframeRef.current
      iframe.srcdoc = `
        <script>
          const originalConsole = console;
          console = {
            log: (...args) => {
              originalConsole.log(...args);
              window.parent.postMessage("log${splitBar}"+args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' '), '*');
            },
            error: (...args) => {
              originalConsole.error(...args);
              window.parent.postMessage("error${splitBar}"+ args.map(arg => arg instanceof Error ? arg.message : (typeof arg === 'object' ? JSON.stringify(arg) : arg)).join(' '), '*');
            },
            warn: (...args) => {
              originalConsole.warn(...args);
              window.parent.postMessage("warn${splitBar}"+ args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' '), '*');
            }
          };

          try {
            ${jsCode}
          } catch (error) {
            console.error(error);
          }
        </script>
      `
    
    }


    
  }



  return (
    <ResizablePanelGroup  direction="horizontal" className="min-h-screen">
      <ResizablePanel defaultSize={60} minSize={60}>
        <JsEditor onCodeExecute={onCodeExecute}  onJsCodeChange={onJsCodeChange} jsCode={jsCode}    />
        <iframe ref={iframeRef} className="hidden" sandbox="allow-scripts" />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40} maxSize={40} minSize={30}>
        <JsOutput setOutput={setOutput} output={output} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Page;
