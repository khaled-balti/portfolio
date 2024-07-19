import React from 'react'
import './Contact.css'
import Input from '../../ui/Input/Input'
import Select from '../../ui/Select/Select'
import TextArea from '../../ui/TextArea/TextArea'
const Contact = () => {
  return (
    <div className='mt-5' id='contact' >
        <p className='text-center fs-3 fw-semibold text-white'>Contact Me</p>
        <p className='text-white text-center'>Cultivating Connections: Reach Out And Connect With Me</p>
        <form className='container-fluid px-5 position-relative d-flex flex-column mt-5'>
            <div className='row'>
                <div className='col-12 col-lg-6 mb-4'>
                    <div className='col-12'>
                        <Input placeholder="Name" />
                    </div>
                </div>
                <div className='col-12 col-lg-6 mb-4'>
                    <div className='col-12'>
                        <Input placeholder="Email" />
                    </div>
                </div>
                <div className='col-12 col-lg-6 mb-4'>
                    <div className='col-12'>
                        <Input placeholder="Phone Number" />
                    </div>
                </div>
                <div className='col-12 col-lg-6 mb-4'>
                    <div className='col-12'>
                        <Select />
                    </div>
                </div>
                <div className='col-12 col-lg-6 mb-4'>
                    <div className='col-12'>
                        <Input placeholder="TimeLine" />
                    </div>
                </div>
                <div className='col-12 col-lg-6 mb-4'>
                    <div className='col-12'>
                        <TextArea placeholder="Project Details..." />
                    </div>
                </div>
            </div>
            <button className='button2 fs-5 px-3 '>Send</button>
        </form>
    </div>
  )
}

export default Contact