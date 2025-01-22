'use client'

import React, {  useEffect, useRef } from 'react'
import { Monaco, Editor as MonacoEditor } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import { htmlCompletionItems } from '@/lib/editor/autocompletion'
import { useAppSelector } from '@/store/hooks'

interface MonacoEditorProps {
  language: string
  value: string
  onChange: (value: any) => void
  height?: string
  width?: string
  autoCompletions?:any[]
}

export default function Editor({
  language,
  value,
  onChange,
  height = '400px',
  width = '500px',
}: MonacoEditorProps) {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
    // HTML Completion Items
  

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monacoInstance: Monaco) => {

    editorRef.current = editor;

    
      


    monacoInstance.languages.registerCompletionItemProvider('html', {
      provideCompletionItems: (model, position) => {
        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        };
        return {
          suggestions: htmlCompletionItems.map(item => ({
            label: item.label,
            kind: monacoInstance.languages.CompletionItemKind.Snippet,
            insertText: item.insertText,
            insertTextRules: monacoInstance.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range,
            
          })),
        };
      },
    });
  }



  const theme=useAppSelector((state)=>state.editor.theme)
  const fontSize=useAppSelector((state)=>state.editor.fontSize)
  const wordWrap=useAppSelector((state)=>state.editor.wordWrap)
  const miniMap=useAppSelector((state)=>state.editor.miniMap)
  const cursor=useAppSelector((state)=>state.editor.cursor)
  const whiteSpace=useAppSelector((state)=>state.editor.whiteSpace)
  const lineHeight=useAppSelector((state)=>state.editor.lineHeight)

  
  

  return (
<MonacoEditor
  height={height}
  width={width}
  language={language}
  value={value}
  onChange={onChange}
  onMount={handleEditorDidMount}
  theme={theme}
  options={{
    automaticLayout: true,
    fontSize: fontSize, // 14 , 15 , 16 , 17
    lineHeight: lineHeight, // 19  20 21 22
    wordWrap:  wordWrap?'on':'off', // Options: 'off', 'on', 'wordWrapColumn', 'bounded'
    minimap: {
      enabled: miniMap,
      renderCharacters: true,
      maxColumn: 100,
      scale:2,
    },
    readOnly: false,  // to share code snippits 
    
    cursorStyle: cursor, // Options: 'block', 'line', 'underline'
    tabSize: 4,
    insertSpaces: true,
    lineNumbers: 'on', // Options: 'on', 'off', 'relative', 'interval'
    selectionHighlight: true,
    overviewRulerBorder: true,
    overviewRulerLanes: 2,
    renderLineHighlight: 'all', // Options: 'none', 'gutter', 'line', 'all'
    renderWhitespace: whiteSpace?'all':'none', // Options: 'none', 'boundary', 'all'
    formatOnPaste: true,
    formatOnType: true,
    autoClosingBrackets: 'always', // Options: 'always', 'languageDefined', 'beforeWhitespace', 'never'
    autoClosingQuotes: 'always', // Options: 'always', 'languageDefined', 'beforeWhitespace', 'never'
    suggestOnTriggerCharacters: true,
    quickSuggestions: true, 
    parameterHints:{
      enabled:true
    } ,
    snippetSuggestions: 'inline', // Options: 'top', 'bottom', 'inline', 'none'
    acceptSuggestionOnEnter: 'on', // Options: 'on', 'smart', 'off'
    acceptSuggestionOnCommitCharacter: true,
    suggestSelection: 'first', // Options: 'first', 'recentlyUsed', 'recentlyUsedByPrefix'
    hideCursorInOverviewRuler: false,
    scrollPredominantAxis: true,
    mouseWheelScrollSensitivity: 1,
    dragAndDrop: true,
    lineDecorationsWidth: '10px', // Example value
    lineNumbersMinChars: 3, // Example value
  }}
/>
  )
}

