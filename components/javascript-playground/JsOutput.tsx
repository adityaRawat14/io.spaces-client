"use client";

import { JsOutputType } from "@/app/playground/javascript/page";
import React, { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface JsOutputProps {
  output: JsOutputType[];
  setOutput:any
}

function JsOutput({ output,setOutput }: JsOutputProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [output]);

  const handleClearConsole=()=>{
setOutput([])
  }


  return (
    <ScrollArea ref={scrollAreaRef} className="bg-[#1E1E1E] h-screen w-full border-l-[4px] border-gray-600">
      <div className="p-4">
       <div className="flex   border-gray-700 border-b py-2 justify-between w-full pr-10  items-center ">
       <h1 className="font-bold  items-center flex text-2xl text-gray-500 ">
          Output
        </h1>
        <button className="text-gray-300  border border-gray-500 px-1 rounded-sm  py-1 text-sm" onClick={handleClearConsole}>Clear</button>
       </div>
        <div className="overflow-y-auto py-3">
          {output && (
            <pre className="w-full rounded text-gray-400 text-[11px]">
              <ul className="w-full flex flex-col gap-1 ">
                {output.map((data: JsOutputType, index: number) => {
                 
                  let color;
                  if (data.type === 'error') color = 'text-red-500';
                  else if (data.type === 'warn') color = 'text-yellow-300';
                  else if (data.type === 'log') color = 'text-gray-300 ';

                  return <li className={`px-2  ${color}`} key={index}>{data.message}</li>;
                })}
              </ul>
            </pre>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}

export default JsOutput;

