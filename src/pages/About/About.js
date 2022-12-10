import React from 'react';
import img from '../../assets/images/sumayer.png'
import './About.css'
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2'>
                   
                </div>
                <div className='col-md-8'>
                    
                      <div className='vh-100 d-flex align-items-center'>
                       <div className='about-sec rounded'>
                       <div className='row d-flex align-items-end'>
                       <div className='col-md-5'>
                        <div className=''>
                        <img className='img-fluid rounded-start' src={img} alt=''></img>
                    </div>
                        </div>
                        <div className='col-md-7'>
                            <div className='text-white p-4'>
                                <h1 className='fw-bold'>MD. <span style={{color: '#C58940'}}>SUMAYER</span></h1>
                                <p className='fs-5'>Front-end web developer.</p>
                                <p style={{color: '#dddddd'}} className='fw-light fs-5'>I'm <strong>Md. Sumayer</strong>. I'm a front-end developer. I'm very passionate and dedicated to my work. I have acquired the necessary skills and knowledge related to front-end development. I'm very curious about new technologies related to web.</p>
                                <div>
                                   <a className='fs-3 me-3 text-white' target='_blank' rel='noreferrer' href='https://www.facebook.com/sumayerbinkalam'><FaFacebookSquare></FaFacebookSquare></a>
                                   <a className='fs-3 me-3 text-white' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/md-sumayer-285b081b7'><FaLinkedin></FaLinkedin></a>
                                    
                                </div>
                            </div>
                        </div>
                       </div>
                      </div>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    );
};

export default About;