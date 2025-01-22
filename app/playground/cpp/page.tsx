"use client"
import CppEditor from '@/components/cpp-playground/CppEditor'
import CppOutput from '@/components/cpp-playground/CppOutput'
import React from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

function Page() {
    

  
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-screen">
            <ResizablePanel defaultSize={60} minSize={40}>
                <CppEditor  />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40} minSize={30}>
                <CppOutput />
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}

export default Page
