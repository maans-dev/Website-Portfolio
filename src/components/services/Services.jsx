import React from 'react'
import './services.css'
import {FaArrowAltCircleRight} from 'react-icons/fa'

const services = () => {
  return (
    <section id='services'>
      <h5>My Assistance </h5>
      <h2>Servies</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Tutoring</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaArrowAltCircleRight className='service__list-icon'/>
              <p>
                Learn Python with me If you want to learn to code from scratch through building fun and useful projects. Working with a massive amount of tools and technologies. Be able to use Python for data science and machine learning
              </p>
            </li>

            <li>
              <FaArrowAltCircleRight className='service__list-icon'/>
              <p> 
              Designing and implementing UI components for JavaScript-based web applications and mobile applications with the use of open-source library infrastructure. 
              Developing new user-facing features using ReactJS. Building reusable components and front-end libraries for the future. Optimizing components for maximum performance across a vast array of web-capable devices and browsers.
              </p>
            </li>

            <li>
              <FaArrowAltCircleRight className='service__list-icon'/>
              <p>
              Establish goals and plan for chess preparation and competition; Promoting and monitoring these goals to keep the individual on task. Encourage students to learn the game of chess and improve their chess playing skills.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services