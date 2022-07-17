import React from 'react'
import './about.css'
import Image from '../../assets/Herman-second-beach.JPG'
import {IoPeopleCircleSharp} from 'react-icons/io5'
import {BsFileEarmarkCodeFill} from 'react-icons/bs'
import {FaProjectDiagram} from 'react-icons/fa'


const about = () => {
  return (
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Image} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFileEarmarkCodeFill className='work__icon'/>
              <h5>Experience</h5>
              <small>6 months working</small>
            </article>

            <article className='about__card'>
              <IoPeopleCircleSharp className='people__icon'/>
              <h5>Clients Work</h5>
              <small>Github Repository</small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram className='project__icon'/>
              <h5>Projects</h5>
              <small>Github Repository</small>
            </article>

          </div>

          <p>
          My innovative mind sparked when I digested the cs50 course. My life has never been the same since. Proficiency in JavaScript, Python as my main driving force with supplementary libraries and languages such as ReactJS, SQL, CSS3, SEO, Data visualization & information gathering, Typescript, MongoDB. Exploring Artificial Intelligence as a way to better understand human behaviour, my love for data drives me every day to better understand new perspectives.
          </p>

          <a href="#contact" className='btn-primary'></a>
        </div>
      </div>
    </section>
  )
}

export default about