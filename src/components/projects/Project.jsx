import React from 'react'
import './project.css'
import Messenger from '../../assets/messenger-image.jpg';
import Gym from '../../assets/gym-sets.jpg';
import Recipe from '../../assets/recipe-image.jpg';

const data = [
  {
    id: 1,
    image: Gym,
    title: 'Full Workout Regime',
    github: 'https;//github/com',
    demo: 'https://www.google.co.za/'
  },

  {
    id: 2,
    image:  Messenger,
    title: 'Private Messaging App',
    github: 'https;//github/com',
    demo: 'https://www.google.co.za/'
  },

  {
    id: 3,
    image: Recipe,
    title: 'Recipes A to Z',
    github: 'https;//github/com',
    demo: 'https://www.google.co.za/'
  },
]

const projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      
    <div className='container portfolio__container'>
      {
        data.map(({id,image,title,github,demo}) =>{
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} target="_blank" className='btn'>Github Repository</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo View</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default projects