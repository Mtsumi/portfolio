import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaBriefcase} from 'react-icons/fa'
import {MdOutlineConstruction} from 'react-icons/md'
import {MdFolderSpecial} from 'react-icons/md'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container' >
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='About image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaBriefcase />
              <h5>Experience</h5>
              <small>2+ Years Software Development</small>
            </article>

            <article className='about__card'>
              <MdOutlineConstruction />
              <h5>Interests</h5>
              <small>Backend Development</small>
            </article>

            <article className='about__card'>
              <MdFolderSpecial />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>

          </div>
          <p>
          A Software Engineer with hands on experience developing websites, full-stack web applications and APIs.
          When I'm not tackling complex coding challenges,
          you'll find me in the pool perfecting my front crawl or in the outdoors pounding the pavement, 
          working out my body as much as my brain.
          Thank you for visiting my portfolio, and feel free to <a href='#contact'>reach out</a> if you have any questions!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about