import React from 'react'
import "../assets/css/Header.css";
import github from '../assets/photos/github.png'
import linkedin from '../assets/photos/linkedin.png'
import gmail from '../assets/photos/gmail.png'


function Header() {
    return (
        <div className="header">
        <h3>Nakul's blog</h3> 
        <dic className="icons" >
          <a href="https://www.github.com/knakul853" target="_blank">
            <img src={github} alt="GitHub logo" />
          </a>
          <a href="mailto:knakul853@gmail.com" target="_blank">
            <img src={gmail} alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/nakul-bharti-a7b783135/" target="_blank">
            <img src={linkedin} alt="GitHub logo" />
         </a>
        </dic>
        </div>
    )
}

export default Header
