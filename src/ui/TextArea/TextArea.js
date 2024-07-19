import React from 'react'
import './TextArea.css'
const TextArea = ({placeholder}) => {
  return (
    <textarea className='textarea px-3 fw-semibold pt-4' placeholder={placeholder}></textarea>
  )
}

export default TextArea