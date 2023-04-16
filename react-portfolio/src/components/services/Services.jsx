import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className=" container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
        

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>User research and analysis</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Information architecture and navigation design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Responsiveness for web and mobile applications</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Design implementation</p>
              </li>
            </ul>
        </article>

        {/* END OF UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
        

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>RESTful API development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Database design and management</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Server-side programming with Node.js and Python</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>AWS Cloud and GCP</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>API integration with frontend</p>
              </li>
            </ul>
            
        </article>

        {/* END OF BACKEND */}

        <article className='service'>
          <div className="service__head">
            <h3>DevOps and Automation</h3>
          </div>
        

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Cloud computing infrastructure setup</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>CloudFormation Yaml scripts</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Configuration with Fabric, Puppet and Ansible</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Application performance monitoring and optimization</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Configuration of nginx and Apache web servers</p>
              </li>
            </ul>
            
        </article>
      </div>
      
    </section>
  )
}

export default Services