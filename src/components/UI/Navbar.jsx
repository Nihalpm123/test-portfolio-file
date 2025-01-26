import React from 'react'
import { IoMdMenu } from "react-icons/io";

const New = () => {
  return (
    <>
        <header>
          <a href="#" className='logo'>Nihal.</a>
          
          <IoMdMenu id='menu-icon'/>

          <nav>
            <a href="#" className='active'>Home</a>
            <a href="#">Services</a>
            <a href="#">Resume</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </nav>
        </header>
    </>
  )
}

export default New