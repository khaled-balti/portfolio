import React from 'react'
import './Input.css'
const Input = ({placeholder}) => {
  return (
    <input type='text' className='input px-3 fw-semibold' placeholder={placeholder} />
  )
}

export default Input