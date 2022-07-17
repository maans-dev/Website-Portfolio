import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {MdElectricalServices} from 'react-icons/md'
import {IoMdCodeWorking} from 'react-icons/io'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react';

const Nav = () => {
  const [ActiveNav, SetActiveNav] =useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>{
        SetActiveNav('#')
      }} className={ActiveNav === '#' ? 'active': ''}><BiHomeAlt /> </a>
      <a href="#about" onClick={()=>{
        SetActiveNav('#about')
      }}className={ActiveNav === '#about' ? 'active': ''}><AiOutlineUser /> </a>
      <a href="#services" onClick={()=>{
        SetActiveNav('#services')
      }}className={ActiveNav === '#services' ? 'active': ''}><MdElectricalServices /> </a>
      <a href="#projects"onClick={()=>{
        SetActiveNav('#projects')
      }}className={ActiveNav === '#projects' ? 'active': ''}><IoMdCodeWorking /> </a>
      <a href="#contacts" onClick={()=>{
        SetActiveNav('#contacts')
      }}className={ActiveNav === '#contacts' ? 'active': ''}><AiOutlineMessage/> </a>
    </nav> )
}

export default Nav