"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { IoReloadOutline } from "react-icons/io5";
interface ReactOutputProps{
  reactCode:any,
  cssCode:any
}

export default function ReactOutput({reactCode,cssCode}:ReactOutputProps) {
  const [error, setError] = useState<string | null>(null);
  const outputFrameRef=useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleError = (e:ErrorEvent) => {
      setError(error)
    };
 
    
    
    window.addEventListener('error', handleError);
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []); 



  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-gray-100 border shadow-md shadow-gray-200 border-gray-300 rounded-sm p-2" >
        <div className="flex px-2 items-center space-x-6" >
            <IoReloadOutline className={`h-4 w-4 text-gray-700 hover:text-gray-800 `}  />
            <span className="sr-only">Run Code</span>
            <div className="flex bg-gray-300/60 py-1 rounded-r-md rounded-l-full gap-5 flex-grow">
            <div className="inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiGlobe className="h-4 w-4 text-gray-400" />
            </div>
            <p className="text-sm text-gray-700">https://localhost:3000/</p>
          </div>
        </div>
      </div>

      

      {error && (
        <div className="mt-4 p-2 text-sm font-semibold ">
          {error}
        </div>
      )}

      <iframe
      ref={outputFrameRef}
        srcDoc={`
          <html>
            <head>
              <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
              <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
              <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            </head>
            <style>
            ${cssCode}
            </style>
            <body>
              <div id="root"></div>
              <script type="text/babel">
              ${reactCode}
                ReactDOM.render(<App />, document.getElementById('root'));
              </script>
            </body>
          </html>
        `}
        title="output"
        sandbox="allow-scripts"
        className="w-full h-64  mt-4 " />
    </div>
  );
}