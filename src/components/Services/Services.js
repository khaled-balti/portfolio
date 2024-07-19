import React from 'react'
import './Services.css'
import Frontend from '../../assets/frontend.png'
import Design from '../../assets/design.png'
import Backend from '../../assets/backend.png'
const Services = () => {
  return (
    <div className='mt-5 pb-5' id='services'>
        <p className='text-center fs-5 text-white'>My Services</p>
        <p className='text-center fs-3 fw-semibold mb-5' style={{color: "#E8CF00"}}>What I Do ?</p>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5'>
                    <div className='w-75 d-flex flex-column align-items-center px-4 py-4' style={{border: '2px solid #E8CF00', borderRadius: '10px'}}>
                        <img src={Frontend} alt='error' width={180} height={120} />
                        <p className='fs-4 text-white fw-semibold text-white mt-2'>Frontend Development</p>
                        <p className='text-white' >we create visually impact web interfaces that effectively communicate messages and meet their unique need.</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5'>
                    <div className='w-75 col-12 d-flex flex-column align-items-center px-4 py-4' style={{border: '2px solid #E8CF00', borderRadius: '10px'}}>
                        <img src={Design} alt='error' width={180} height={120} />
                        <p className='fs-4 text-white fw-semibold text-white mt-2'>Web Design</p>
                        <p className='text-white'>we create visually impact web interfaces that effectively communicate messages and meet their unique need.</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5'>
                    <div className='w-75 col-12 d-flex flex-column align-items-center px-4 py-4' style={{border: '2px solid #E8CF00', borderRadius: '10px'}}>
                        <img src={Backend} alt='error' width={180} height={120} />
                        <p className='fs-4 text-white fw-semibold text-white mt-2'>Backend Development</p>
                        <p className='text-white'>we create visually impact web interfaces that effectively communicate messages and meet their unique need.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services