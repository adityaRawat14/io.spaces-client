import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='h-screen'>{children}</div>
  )
}

export default layout