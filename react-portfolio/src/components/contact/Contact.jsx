import React, { useRef } from 'react'
import './contact.css'
import Fade from 'react-reveal'
import {MdOutlineEmail} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
    // emailjs.sendForm('service_v214ft4', 'template_u0prxkh', form.current, 'qmDKxfgX45U-93RE3')
    
    e.target.reset();
  }
  return (
    <Fade top>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>mtsumijr@gmail.com</h5>
              <a href="mailto:mtsumijr@gmail.com" target="_blank"> Send a message</a>
            </article>
            <article className='contact__option'>
              <FaWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+254712531490</h5>
              <a href="https://api.whatsapp.com/send?phone=254712531490" target="_blank"> Send a message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </Fade>
  )
}

export default Contact