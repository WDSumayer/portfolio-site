import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './Contact.css'
import { toast } from 'react-hot-toast';
const Contact = () => {
   
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
           
          emailjs.sendForm('service_aha4zq8', 'template_fa7bh3q', form.current, 'sN9w6HV0nGPiRQUCF')
            .then((result) => {
              e.target.reset()
              toast.success('info sent successfully')
            }, (error) => {
                console.log(error.text);
            });
        };
    return (
        <div className='d-flex align-items-center vh-100'>
            <div className='container'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                    <div className='col-md-10'>
                <div className='contact-wrapper'>
                           <div className='row gy-5'>
                            <div className='col-md-6'>
                            <div className='contact-form'>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="mb-3">
                                        <input type="text" name="user_name" placeholder='Your Name' />
                                       
                                    </div>
                                    <div className="mb-3">
                                       
                                        <input type="email" name="user_email" placeholder='Your Email' />
                                    </div>
                                    <div class="mb-3">
                                        <textarea name="message" className="w-100" rows='4' placeholder="Your Message"></textarea>
                                    
                                    </div>


                                    <button type="submit" style={{backgroundColor: '#C58940'}} className="btn text-white fw-bold w-100 py-3">Send</button>
                                </form>
                                
                            </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='my-info'>
                                    <p><FaMapMarkerAlt></FaMapMarkerAlt> Kushtia, Bangladesh</p>
                                    <p><FaEnvelope></FaEnvelope> sumairbinkalam20@gmail.com</p>
                                    <p><FaPhoneAlt></FaPhoneAlt> +8801718470970</p>
                                </div>
                            </div>
                           </div>
                        </div>
                        <div className='col-md-1'>

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;