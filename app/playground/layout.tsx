import EditorSettings from '@/components/editor/EditorSettings'
import Header from '@/components/ui/Header'
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='min-h-screen'>
        <Header/>
        {children}
        <EditorSettings />
    </div>
  )
}

export default layout