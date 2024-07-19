import React, { useState } from 'react'
import './Select.css'
const Select = () => {
    const [show, setShow] = useState(true)
  return (
    <select className='input px-3 fw-semibold' onClick={() => setShow(false)}>
        {show && <option className='hidden' value=""selected >Service Of Interest:</option>}
        <option className='hidden' value="Internship">Internship</option>
        <option className='hidden' value="Remote Work">Remote Work</option>
        <option className='hidden' value="Full-Time Work">Full-Time Work</option>
    </select>
  )
}

export default Select