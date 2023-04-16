import React from 'react'
import CV from '../../assets/cv.pdf'

const cta  = () => {
  return (
    <div className= "cta">
        <a href='' download className='btn'>Download my CV</a>
        <a href='#contact' className='btn btn-promary'>Send me a Message</a>
    </div>
  )
}

export default cta