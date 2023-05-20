import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import WA from '../../assets/whatsapp.png'
// import { FaWhatsapp } from 'react-icons/fa'
// import {FiPhoneCall} from 'react-icons/fi'
import CALL from '../../assets/call.png'
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
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>mtsumijr@gmail.com</h5>
              <a href="mailto:mtsumijr@gmail.com" target="__blank" rel="noreferrer"> Send a message</a>
            </article>
            <article className='contact__option'>
              {/* <FaWhatsapp className='contact__option-icon' /> */}
              <img src={WA} alt="whatsapp" className='whatsapp'/>
              <h4>WhatsApp</h4>
              <h5>+254712531490</h5>
              <a href="https://api.whatsapp.com/send?phone=254712531490" target="__blank" rel="noreferrer"> Send a message</a>
            </article>
            <article className='contact__option'>
              {/* <FiPhoneCall className='contact__option-icon' /> */}
              <img src={CALL} alt="call-icon" className='whatsapp'/>
              <h4>Call Me</h4>
              <h5>+254712531490</h5>
              <a href="tel:254712531490" target="__blank" rel="noreferrer"> Give me a Call</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email Address' required />
            <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
  )
}

export default Contact