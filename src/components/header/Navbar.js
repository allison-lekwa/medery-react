import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/medery.svg';

import { GiHospital } from "react-icons/gi";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {setButton(true)}
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <div className='navbar'>
          <div className='navbar-container container'></div>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <GiHospital className='navbar-icon' />
              <Logo className='logo' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                  Partner With Us
                </Link>
              </li>
              <li className="nav-btn">
                <Link to='/' className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                            Sign Up
                  </Button>
                </Link>
              
              </li>
              
            </ul>          
        </div>
      </IconContext.Provider>
            
    </>
  )
}

export default Navbar
