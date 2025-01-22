import { FiGlobe } from "react-icons/fi";
import { IoReloadOutline } from "react-icons/io5";
import React, { useEffect } from 'react'
interface HtmlOutputProps{

  outputDoc:string
}
function HtmlOutput({outputDoc}:HtmlOutputProps) {


  return  (
    <div className="flex min-h-screen w-full flex-col  ">
               <div className="bg-gray-100 border shadow-md shadow-gray-200 border-gray-300  p-2" >
        <div className="flex px-2 items-center space-x-6" >
            <IoReloadOutline className={`h-4 w-4 text-gray-700 hover:text-gray-800`}  />
            <div className="flex bg-gray-300/60 py-1 rounded-r-md rounded-l-full gap-5 flex-grow">
            <div className="inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiGlobe className="h-4 w-4 text-gray-400" />
            </div>
            <p className="text-sm text-gray-700 outline-none" >https://localhost:3000/</p>
          </div>
        </div>
      </div>

          <div  className='py-1 ' >
            <iframe id="iframeTag" srcDoc={outputDoc}  ></iframe>
          </div> 
  </div>

  )
}

export default HtmlOutput