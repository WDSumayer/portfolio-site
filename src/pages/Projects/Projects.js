import React from 'react';
import './Project.css'
import project3 from '../../assets/images/project-3.jpg'
import project1 from '../../assets/images/project-1.jpg'
import project2 from '../../assets/images/project-2.jpg'
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
const Projects = () => {
    return (
        <div className='d-flex align-items-center vh-100'>
            <div className='container'>
                <div className='row gx-5 gy-5'>
                    <div className='col-md-4'>
                        <div className='project shadow-lg rounded'>

                            <div className='project-img rounded-top'>
                                <div className='project-img-overlay rounded-top d-flex justify-content-center align-items-center'>
                                    <a className='text-white fs-3' href='#'><FaEye></FaEye></a>
                                </div>
                                <img className='w-100 rounded-top' src={project1} alt=''></img>
                            </div>
                            <div className='portfo-content p-3 rounded-bottom'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h2>Car Reseller</h2>
                                    <FaExternalLinkAlt></FaExternalLinkAlt>
                                </div>
                                <p>This is a second-hand cars reselling site. A single page application by react js and fully resposive</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='project shadow-lg rounded'>

                            <div className='project-img rounded-top'>
                                <div className='project-img-overlay rounded-top p-4 d-flex justify-content-center align-items-center'>
                                    <a className='text-white fs-3' href='#'><FaEye></FaEye></a>
                                </div>
                                <img className='w-100 rounded-top' src={project2} alt=''></img>
                            </div>
                            <div className='portfo-content p-3 rounded-bottom'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h2>Care Dent</h2>
                                    <FaExternalLinkAlt></FaExternalLinkAlt>
                                </div>
                                <p>This is a site of any dental services. A single page application by react js and fully responsive.</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='project shadow-lg rounded'>

                            <div className='project-img rounded-top'>
                                <div className='project-img-overlay rounded-top p-4 d-flex justify-content-center align-items-center'>
                                    <a className='text-white fs-3' href='#'><FaEye></FaEye></a>
                                </div>
                                <img className='w-100 rounded-top' src={project3} alt=''></img>
                            </div>
                            <div className='portfo-content p-3 rounded-bottom'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h2>PL-Coder</h2>
                                    <FaExternalLinkAlt></FaExternalLinkAlt>
                                </div>
                                <p>This is a site of programmig language courses. A single page application by react js and fully responsive.</p>

                            </div>
                        </div>
                    </div>

                 
                </div>

            </div>
        </div>
    );
};

export default Projects;