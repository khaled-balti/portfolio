import React from 'react'
import SelfImg from '../../assets/selfimg.png'
import './About.css'
import Skill from '../../ui/Skill/Skill';
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
const About = () => {
  return (
    <div className='mt-5 pb-5 mb-5' id='about' >
        <p className='text-center fs-3 fw-semibold text-white'>About Me</p>
        <p className='text-white text-center'>Full Stack Web Developer & Designer</p>
        <div className='container-fluid section pe-lg-5 mb-5'>
            <div className='row'>
                <div className='d-none d-lg-block col-lg-6'>
                    <div className='col-12'>
                        <div class="wrappers">
                            <div class="image-container d-flex justify-content-center align-items-center">
                                <img src={SelfImg} width={300} height={420} className='image2 mt-1' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 mt-5'>
                    <div className='col-12 mt-lg-5 pe-5'>
                        <p className='text-white'>As a full stack web developer, I possess skills in both front-end and back-end development, allowing me to build complete web applications. On the front-end, I am proficient in HTML, CSS, and JavaScript, and I use frameworks like React to create responsive user interfaces. My design skills ensure engaging layouts, while my knowledge of state management and component-based architecture supports scalable applications.</p>
                        <p className='text-white'>On the back-end, I have expertise in server-side programming with Node.js and Express, enabling me to create robust server logic. I understand both relational and non-relational databases, designing effective data storage solutions. My experience with RESTful API development ensures smooth communication between front-end and back-end, resulting in seamless functionality and high-quality web applications.</p>
                        <a href='https://drive.google.com/file/d/1LdfmOkfHrjr50JnQPcqhcDZcXPtghzqp/view?usp=drive_link' target='_blank' ><button className='button fw-semibold px-3 mt-3'>Download CV</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid px-5'>
            <div className='row px-5'>
                <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <Skill percentage={90} name='ReactJs' ><FaReact color='#aaa' size={40} style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}} /></Skill>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <Skill percentage={70} name='Figma'  ><FaFigma color='#aaa' size={40} style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}} /></Skill>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <Skill percentage={90} name='NodeJs'><FaNodeJs color='#aaa' size={40} style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}} /></Skill>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <Skill percentage={70} name='NestJs' ><SiNestjs color='#aaa' size={40} style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}} /></Skill>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <Skill  percentage={80} name='MySql' ><TbBrandMysql color='#aaa' size={40} style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}} /></Skill>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <Skill percentage={90} name='MongoDB'><SiMongodb color='#aaa' size={40} style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}} /></Skill>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About