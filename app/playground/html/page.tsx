"use client";
import HtmlEditor from "@/components/html-playground/HtmlEditor";
import useDebounce from "@/hooks/useDebounce";
import React, { useEffect, useState } from "react";

function Page() {


  const [error,setError] = useState<any>(null);
  const [htmlCode, setHtmlCode] = useState<string>(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
 
<body>
    <h1 id="heading"></h1>
</body>
</html>
`);
  const [cssCode, setCssCode] = useState<string>(
    `h1{
    color: red;
    background-color: yellow ;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px black solid;
}
    `);
  const [jsCode, setJsCode] = useState<string>(
`const headingElement=document.getElementById('heading')
headingElement.innerText="Hello World"
`);

 
  const onHtmlChange = (e: string) => { 
    setHtmlCode(e);
  };
  const onCssChange = (e: string) => {
    setCssCode(e);
  };
  const onJsChange = (e: string) => {
    setJsCode(e);
  };
  
  
  return (
    <div className="w-[100vw] h-full">
      <HtmlEditor
        htmlCode={htmlCode}
        cssCode={cssCode}
        jsCode={jsCode}
        onCssChange={onCssChange}
        onHtmlChange={onHtmlChange}
        onJsChange={onJsChange}
      />
    </div>
  );
}

export default Page;