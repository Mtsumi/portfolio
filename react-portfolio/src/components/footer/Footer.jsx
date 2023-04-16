import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import logo from '../../assets/logo1.png'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={logo} alt="Logo" />
        </a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials"> 
        <a href="https://medium.com/@mtsumijr"><BsMedium/></a>
        <a href="https://www.instagram.com/mtsumijr_/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/aly-mtsumi-588627143/"><BsLinkedin/></a>
        <a href="https://github.com/Mtsumi"><BsGithub/></a>
        <a href="https://twitter.com/AlyMtsumi"><BsTwitter/></a>    
      </div>

      <div className="footer__copyright">
        <small>&copy; Aly Mtsumi 2023. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer