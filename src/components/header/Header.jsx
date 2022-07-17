import React from 'react'
import './header.css'
import CTA from './cta'
import Herman from '../../assets/main-image.jpg'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <section>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Herman Rademeyer</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="Herman">
          <img src={Herman} alt="Herman" />

          <a href="#contact" className='scroll__down'>Scroll</a>
        </div>
      </div>
    </section>
  )
}

export default header