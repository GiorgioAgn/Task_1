import React, { Component } from 'react';
import Logo from '../assets/kingLogo.png';
import "../styles/Navbar.css";



class Navbar extends Component {
  state={clicked: false, isFooterFixed: false}; 
  handleClick = () => {
    this.setState({clicked:!this.state.clicked,
      isFooterFixed: !this.state.isFooterFixed});

    if (!this.state.clicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    if (!this.state.isFooterFixed) {
      document.querySelector('.footer').style.position = 'fixed';
    } else {
      document.querySelector('.footer').style.position = 'relative';
    }
  }
  render() {
    return(
      <>
        <nav>
          <a href='index.html'> <img className='logo' src={Logo} alt="" /></a>
          <div>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li><a href='index.html'>Home</a></li>
              <li><a href='index.html'>Shop</a></li>
              <li><a href='index.html'>Contact us</a></li>
              <li><button cssClass='e-round-corner'><a href='index.html' style={{color: 'white'}}>Sign up</a></button></li>
            </ul>
          </div>
        
          <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </nav>
      </>
    )
  }
}
export default Navbar;