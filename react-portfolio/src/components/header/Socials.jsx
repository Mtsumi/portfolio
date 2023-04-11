import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsStackOverflow} from 'react-icons/bs'


const Socials = () => {
  return (
    <div className='header__socials'>
        
        <a href='https://www.linkedin.com/in/aly-mtsumi-588627143/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Mtsumi' target="_blank"><BsGithub /></a>
        <a href='https://stackoverflow.com/users/18689389/aly-mtsumi' target="_blank"><BsStackOverflow /></a>
        
    </div>
  )
}

export default Socials