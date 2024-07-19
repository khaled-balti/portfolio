import React from 'react'
import SelfImg from '../../assets/selfimg.png'
import './Header.css'
import IconContainer from '../../ui/IconContainer/IconContainer'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Header = () => {
  return (
    <div className='container-fluid d-flex justify-content-center mt-5 px-5' id="home">
        <div className='row'>
            <div className='col-12 col-lg-5 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start'>
                <p className='text-white fw-semibold '>Hello, <span style={{color: '#E8CF00'}} >I'm</span></p>
                <p className='fs-1 fw-semibold' style={{color: '#E8CF00'}}>Khaled Balti</p>
                <p className='fs-2 fw-semibold text-white mb-4 text-center text-md-start'>Full Stack Web Developer</p>
                <p className='fw-semibold text-white fs-5 w-75 mb-4 text-center text-lg-start'>I am committed to finding innovative solutions and continuously experimenting to help my clients achieve their goals</p>
                <button className='button d-flex justify-content-center align-items-center fw-semibold fs-5 mb-4 px-3'>Let's Talk</button>
                <p className='d-flex text-white fw-semibold fs-5'><span className='d-none d-md-inline'>Check out My &nbsp;&nbsp;&nbsp;&nbsp; </span><span className='d-flex' ><IconContainer><FaLinkedin className='icons' size={20} /></IconContainer><IconContainer><FaFacebook size={20} className='icons' /></IconContainer><IconContainer><FaInstagramSquare size={20} className='icons' /></IconContainer><IconContainer><FaTwitter size={20} className='icons' /></IconContainer></span></p>
            </div>
            <div className='col-12 col-lg-7 d-flex justify-content-center justify-content-lg-end align-items-center'>
                <div class="wrapper">
                    <div class="image-cont d-flex justify-content-center align-items-center ps-5">
                        <img src={SelfImg} width={400} height={570} className='image' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header