import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-1'></div>
                <div className='col-12 col-md-10'>
                   <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
                   <div className='text-center text-white hero-content'>
                        <h5>Welcome to my</h5>
                        <h1><span>creative</span> world</h1>
                        <p>I'm a fornt-end web developer.</p>
                        <a href='Md. Sumayer.pdf' download='Md. Sumayer.pdf'><button className='resume-btn'>RESUME</button></a>
                        <Link to='/contact'>
                            <button className='hit-btn'>Hit Me</button>
                        </Link>
                    </div>
                   </div>
                </div>
                <div className='col-12 col-md-1'></div>
            </div>
        </div>
    );
};

export default Home;