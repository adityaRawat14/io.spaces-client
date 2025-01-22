"use client"
import React from 'react'
import ExecutionOutput from '../ui/ExecutionOutput'
import { useAppSelector } from '@/store/hooks'



function JavaOutput() {
  const isExecuting = useAppSelector((state) => state.java.isExecuting);
  const output=useAppSelector((state)=>state.java.output)
  const error=useAppSelector((state)=>state.java.error)
  return (
    <div className='bg-[#1E1E1E] h-full border-l-[4px] border-gray-800'>
      <ExecutionOutput error={error}  output={output} isLoading={isExecuting} />
    </div>
  )
}

export default JavaOutput