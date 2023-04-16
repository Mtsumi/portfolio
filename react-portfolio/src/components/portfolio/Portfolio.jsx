import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/emali.png'
import IMG2 from '../../assets/emali_admin.png'
import IMG3 from '../../assets/maskani.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'e-Mali Store',
    github: 'https://github.com/Mtsumi/e-mali',
    demo: 'https://github.com/Mtsumi/e-mali'
  },
  {
    id: 2,
    image: IMG2,
    title: 'e-Mali Admin App',
    github: 'https://github.com/Mtsumi/e-mali/tree/main/admin-app',
    demo: 'https://github.com/Mtsumi/e-mali/tree/main/admin-app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Maskani',
    github: 'https://github.com/Mtsumi/maskani',
    demo: 'https://github.com/Mtsumi/maskani'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='__blank'>View on GitHub</a>
                <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
              </div>
              </article>
            )
          } )
        }
      </div>
    </section>
  )
}

export default Portfolio