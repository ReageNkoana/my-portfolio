import React, { useRef } from 'react'
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';

import emailjs from '@emailjs/browser';


const Contact = () => {

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9tcyljz', 'template_giou3uj', form.current, '8uQCALkulBqI4oMm-')
      .then((result) => {
          console.log(result.text);
          alert('Email sent!')
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <section id="contactPage">
        
        <div id="contact">
            <h1 className="contactPageTitle"> Contact Me</h1>
            <span className="contactDesc">Please fill out the form to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea className="msg"  rows="5" placeholder='Your Message'name="from_message"></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                  <img src={FacebookIcon} alt="Facebook" className="link"/>
                  <img src={TwitterIcon} alt="Twitter" className="link"/>
                  <img src={YoutubeIcon} alt="Youtube" className="link"/>
                  <img src={InstagramIcon} alt="Instagram" className="link"/>


                </div>
            </form>

        </div>

    </section>
  )
}

export default Contact