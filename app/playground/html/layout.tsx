import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='overflow-hidden'>{children}</div>
  )
}

export default layout