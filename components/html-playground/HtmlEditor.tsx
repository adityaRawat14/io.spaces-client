"use client";

import React, { useEffect, useState } from "react";
import { LuFileJson } from "react-icons/lu";
import { FaFileCode } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import dynamic from 'next/dynamic';
import HtmlOutput from "./HtmlOutput";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import FilesHeader from "../editor/FilesHeader";
import useDebounce from "@/hooks/useDebounce";

const Editor=dynamic(()=>import('../editor/Editor'));

interface HtmlEditorProps {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  onHtmlChange: (e: string) => void;
  onCssChange: (e: string) => void;
  onJsChange: (e: string) => void;
}
function HtmlEditor({ htmlCode, cssCode, jsCode, onHtmlChange, onCssChange, onJsChange }: HtmlEditorProps) {
  const files = [
    { name: "index.html", icon: FaFileCode, language: "html" },
    { name: "style.css", icon: FaHashtag, language: "css" },
    { name: "script.js", icon: LuFileJson, language: "javascript" }
  ];
  const [outputDoc, setOutputDoc] = useState<string>("");

  const [selectedFile, setSelectedFile] = useState<string>("index.html");
  const [editorCode, setEditorCode] = useState<string>("");
  const [language, setLanguage] = useState<string>('html');

  const onFileSelect = (file: string) => {
    setSelectedFile(file);
  };


  const debouncedHtmlCode = useDebounce(htmlCode, 1000);
  const debouncedCssCode = useDebounce(cssCode, 1000);
  const debouncedJsCode = useDebounce(jsCode, 1000);


  useEffect(() => {
      setOutputDoc(`
        <!DOCTYPE html>
        <html>
          <head>
          <script>
                 window.onerror = function(msg, url, line, col, error) {
                 console.log("this is the message",msg);
                  window.parent.postMessage({
                    type: 'error',
                    message: error?.message || msg
                  }, '*');
                  return false;
                };
          </script>
            <title>Page Title</title>
            <style>${debouncedCssCode}</style>
          </head>
          <body>
            ${debouncedHtmlCode}
            <script>${debouncedJsCode}</script>
          </body>
        </html>
      `);
  
  
    }, [debouncedHtmlCode, debouncedJsCode, debouncedCssCode]);
  

  const onEditorCodeChange = (e: string) => {
    if (selectedFile === 'index.html') onHtmlChange(e);
    else if (selectedFile === 'style.css') onCssChange(e);
    else if (selectedFile === 'script.js') onJsChange(e);
  };

  useEffect(() => {
    if (selectedFile === 'script.js') {
      setEditorCode(jsCode);
      setLanguage("javascript");
    } else if (selectedFile === 'index.html') {
      setEditorCode(htmlCode);
      setLanguage("html");
    } else if (selectedFile === 'style.css') {
      setLanguage("css");
      setEditorCode(cssCode);
    }
  }, [selectedFile, htmlCode, cssCode, jsCode]);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen"
    >
      <ResizablePanel defaultSize={70} minSize={30}>
        <div className="flex flex-col h-full  text-gray-300">
           

  <FilesHeader files={files}  onFileSelect={onFileSelect} selectedFile={selectedFile}/>
          <div className="flex-grow">
            <Editor
              width="100%"
              height="calc(100vh - 40px)"
              language={language}
              value={editorCode}
              onChange={onEditorCodeChange}
            />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30} minSize={30}>
        <HtmlOutput outputDoc={outputDoc} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default HtmlEditor;

