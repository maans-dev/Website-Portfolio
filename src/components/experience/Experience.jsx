import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediary</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
               <h4>ReactJS</h4>
               <small className='text-light'>Intermediary</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
               <h4>CSS3</h4>
               <small className='text-light'>Apprentice</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
               <h4>Bootstrap</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
               <h4>HTML5</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
               <h4>PHP</h4>
               <small className='text-light'>Apprentice</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
               <h4>MongoDB</h4>
               <small className='text-light'>Apprentice</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon' />
               <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediary</small>
              </div>
            </article>
          </div>

          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
               <h4>MySQL</h4>
               <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Experience