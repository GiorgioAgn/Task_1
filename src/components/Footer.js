import React from 'react'
import Credits from '../assets/© 2023 Class Technologies Inc..png'
import Social from '../assets/Social.png'
import {Link} from "react-router-dom"
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      
      
      <div className="socialMedia">
        <Link to="">
        <img className='social' src={Social} alt="" />
        </Link>
      </div>
      <p></p>
      <img className='credits' src={Credits} alt="" /> 
    </div>
  )
}

export default Footer
