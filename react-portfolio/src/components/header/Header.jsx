import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mewfp.jpg'
import Socials from './Socials'
import TypingAnimation from './TypingAnimaion'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Hey there, my name is</h5>
        <h1>Aly Mtsumi</h1>
        <h5 className="text-light">FullStack Developer</h5> */}
        <TypingAnimation />
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href='#contact' className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header