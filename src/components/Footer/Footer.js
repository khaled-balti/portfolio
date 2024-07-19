import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='container-fluid position-relative mt-5 py-5 d-flex flex-column justify-content-between align-items-center' style={{backgroundColor: '#0a0a0a', height: '400px'}}>
      <div className='image3 mb-3'>
          <img src={Logo} alt='error' className='img-fluid' />
      </div>
      <div className='d-flex container justify-content-center align-items-center mb-5' style={{marginTop: '100px'}}>
          <div className='circle me-3'><FaFacebook size={25}  style={{position: 'relative'}} /></div>
          <div className='circle me-3'><FaLinkedin size={25} style={{position: 'relative'}} /></div>
          <div className='circle me-3'><FaInstagramSquare size={25} style={{position: 'relative'}} /></div>
          <div className='circle'><FaTwitter size={25} style={{position: 'relative'}} /></div>
      </div>
      <div className='container-fluid d-md-flex justify-content-evenly'>
          <p className='text-white-50 fs-4'><FaEnvelope style={{position: 'relative'}} />&nbsp;&nbsp;&nbsp;khaledbalti00001@gmail.com</p>
          <p className='text-white-50 fs-4'><FaPhoneAlt style={{position: 'relative'}} />&nbsp;&nbsp;&nbsp;+216 22 736 565</p>
      </div>
      <p className='container-fluid text-center mt-2 pt-3 copyright' style={{color: '#333'}}>&#169;&nbsp;Developed By Khaled Balti, Full Stack Web Developer.</p>
    </div>
  )
}

export default Footer