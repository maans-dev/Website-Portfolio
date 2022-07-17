import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/herman-rademeyer-a14aa119a/" target=''><BsLinkedin /></a>
        <a href="https://github.com/maans-dev" target=''><FaGithub /></a>     
    </div>
  )
}

export default HeaderSocial