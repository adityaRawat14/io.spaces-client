import JavaEditor from "@/components/java-playground/JavaEditor";
import JavaOutput from "@/components/java-playground/JavaOutput";
  
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";


function Page() {
 

  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-screen">
      <ResizablePanel defaultSize={60} minSize={60}>
        <JavaEditor    />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40} maxSize={40} minSize={30}>
        <JavaOutput  />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Page;
