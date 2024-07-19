import React from 'react'
import './IconContainer.css'
const IconContainer = ({children}) => {
  return (
    <div className='cont text-white d-flex justify-content-center align-items-center me-4'>
        {children}
    </div>
  )
}

export default IconContainer