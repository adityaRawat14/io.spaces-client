"use client"
import React from 'react'
import ExecutionOutput from '../ui/ExecutionOutput'
import { useAppSelector } from '@/store/hooks'


function CppOutput() {
  const output=useAppSelector((state)=>state.cpp.output)
  const isExecuting=useAppSelector((state)=>state.cpp.isExecuting)
  const error=useAppSelector((state)=>state.cpp.error)
  return (
    <div className='bg-[#1E1E1E] h-full border-l-[4px] border-gray-600'>
      <ExecutionOutput  error={error} output={output} isLoading={isExecuting} />
    </div>
  )
}

export default CppOutput