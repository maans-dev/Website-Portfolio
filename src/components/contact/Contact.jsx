import React from 'react'
import './contact.css'
import {ImMail4} from 'react-icons/im'
import {BsDiscord} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'

const contact = () => {
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact options'>
          <article className='contact option'>
              <ImMail4 className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>hprademeyer123@gmail.com</h5>
              <a href="mailto:hprademeyer123@gmail.com">Send me mail.</a>
          </article>

          <article>
              <BsDiscord className='contact__option-icon'/>
              <h4>Discord</h4>
              <h5>https://discord.gg/MV8gQXvP</h5>
              <a href="https://discord.gg/MV8gQXvP">Join My Discord</a>
          </article>

          <article>
              <FaLinkedin className='contact__option-icon'/>
              <h4>LinkedIn</h4>
              <h5>https://www.linkedin.com/in/herman-rademeyer-a14aa119a</h5>
              <a href="https://www.linkedin.com/in/herman-rademeyer-a14aa119a">Connect on LinkedIn</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' required rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Submit Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact