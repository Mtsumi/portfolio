import React, { useState } from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {SiAboutdotme} from 'react-icons/si'
import {FaBriefcase} from 'react-icons/fa'
import {GiLaptop} from 'react-icons/gi'
import {MdChat} from 'react-icons/md'
import { MdMiscellaneousServices } from 'react-icons/md'

const navLinks = [
  {
    href: '#',
    icon: <FaHome />
  },
  {
    href: '#about',
    icon: <SiAboutdotme />
  },
  {
    href: '#experience',
    icon: <FaBriefcase />
  },
  {
    href: '#services',
    icon: <MdMiscellaneousServices /> 
  },
  {
    href: '#portfolio',
    icon: <GiLaptop />
  }
  ,
  {
    href: '#contact',
    icon: <MdChat />
  }
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const handleClick = (href) => {
    setActiveNav(href)
  }

  return (
    <nav>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={activeNav === link.href ? 'active' : ''}
          onClick={() => handleClick(link.href)}
        >
          {link.icon}
          <span>{link.text}</span>
        </a>
      ))}
    </nav>
  )
}

export default Nav
