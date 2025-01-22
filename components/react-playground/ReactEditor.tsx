"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaFileCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import FilesHeader from "../editor/FilesHeader";
const Editor = dynamic(() => import("../editor/Editor"), { ssr: false });

interface ReactEditorProps {
  reactCode: string;
  onReactCodeChange: (e: any) => void;
  cssCode: string;
  onCssChange: (e: any) => void;
}

function ReactEditor({
  reactCode,
  onReactCodeChange,
  onCssChange,
  cssCode,
}: ReactEditorProps) {
  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

// please do not change this code 
  
  `;

  const files = [
    { name: "App.jsx", icon: FaReact, language: "javascript" },
    { name: "index.html", icon: FaFileCode, language: "html" },
    { name: "style.css", icon: FaHashtag, language: "css" },
  ];

  const [selectedFile, setSelectedFile] = useState<string>("App.jsx");
  const [editorCode, setEditorCode] = useState<string>(``);
  const [language, setLanguage] = useState<string>("javascript");

  const onFileSelect = (file: string) => {
    setSelectedFile(file);
  };

  const onEditorCodeChange = (e: string) => {
    if (selectedFile === "index.html") {
    } else if (selectedFile === "style.css") onCssChange(e);
    else if (selectedFile === "App.jsx") onReactCodeChange(e);
  };

  useEffect(() => {
    if (selectedFile === "App.jsx") {
      setEditorCode(reactCode);
      setLanguage("javascript");
    } else if (selectedFile === "index.html") {
      setEditorCode(htmlCode);
      setLanguage("html");
    } else if (selectedFile === "style.css") {
      setLanguage("css");
      setEditorCode(cssCode);
    }
  }, [selectedFile, cssCode, reactCode,htmlCode]);

  return (
    <div className="w-full min-h-screen relative bg-gray-800 text-gray-300">
      <FilesHeader
        files={files}
        onFileSelect={onFileSelect}
        selectedFile={selectedFile}
      />
      <Editor
        height="100vh"
        onChange={onEditorCodeChange}
        width="70vw"
        language={language}
        value={editorCode}
      />

<p className="absolute bottom-0 right-0 left-0 bg-yellow-300/20 py-3 px-2 text-white text-sm border-y-[2px] border-red-300 ">
  <span className="font-semibold">Warning</span>: You can’t use different
  files for creating different components because this is just for
  practicing React. If you want to work with a complete React environment,
  just use React workspace instead of React playground by clicking on this
  link.
</p>
    </div>
  );
}

export default ReactEditor;
