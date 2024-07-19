import React from 'react'
import Project from './Project'
import './Project.css'
import Proj1 from '../../assets/proj1.png'
import Proj2 from '../../assets/proj2.png'
import Proj3 from '../../assets/proj3.png'
import Proj4 from '../../assets/proj4.png'
import Proj5 from '../../assets/proj5.png'
const Projects = () => {
  return (
    <div className='mt-5 pt-5 mb-5 pb-5' id='projects'>
        <p className='text-center fs-3 fw-semibold text-white mt-5'>Recent <span style={{color: '#E8CF00'}}>Projects</span></p>
        <p className='text-white px-5 fs-5 mb-4 text-center mb-4'>A dedicated web developer with a strong foundation in front-end technologies, skilled in creating responsive and interactive web applications. Adept at leveraging modern frameworks like React to build dynamic user interfaces and enhance user experience.</p>
        <div className='container-fluid px-5 mt-5 pt-5'>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4 mb-5'>
                    <div className='col-12' style={{height: '350px'}}>
                      <Project name="Elearning" image={Proj1} description="An interactive e-learning platform offering diverse courses with video tutorials, quizzes, and personalized learning paths to enhance skills and advance careers." tools={['Reactjs', 'Bootstrap', 'Redux', 'Express', 'MongoDB']} link="https://github.com/khaled-balti/learnHub" />
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-5'>
                    <div className='col-12' style={{height: '350px'}}>
                      <Project name="Car Price Detector" image={Proj2} description="An AI-powered car price detector that evaluates market data to provide accurate vehicle pricing, helping users make informed buying or selling decisions." tools={['Reactjs', 'Bootstrap', 'Express', 'MongoDB']} link="https://github.com/khaled-balti/car-price-detector" />
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-5'>
                    <div className='col-12' style={{height: '350px'}}>
                      <Project name="Chat app" image={Proj3} description="A real-time chat app enabling seamless communication with instant messaging, file sharing, and group chat features for enhanced connectivity." tools={['Reactjs', 'Bootstrap', 'Redux', 'Express', 'MongoDB', "Socket.io"]} link="https://github.com/khaled-balti/chat-app-tutorial-" />
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-5'>
                    <div className='col-12' style={{height: '350px'}}>
                      <Project name="Memory Album" image={Proj4} description="A digital memory album that organizes and preserves your photos and videos, offering easy sharing and personalized layouts to cherish your moments." tools={['Reactjs', 'Bootstrap', 'Redux', 'Express', 'MongoDB', "Mui"]} link="https://github.com/khaled-balti/Momories-Album-tutorial-" />
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-5'>
                    <div className='col-12' style={{height: '350px'}}>
                      <Project name="Weather app" image={Proj5} description="A weather app providing real-time forecasts, alerts, and detailed climate data, helping users plan their day with accurate weather information." tools={['Reactjs', 'Bootstrap', 'OpenWeatherApi']} link="https://github.com/khaled-balti/weather-app" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects