import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/medery.svg'

import './header.styles.scss'

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options-center'>
      <Link className='option-center' to='/'>
        About Us
      </Link>
      <Link className='option-center' to='/'>
        Pricing
      </Link>
      <Link className='option-center' to='/'>
        Partner With Us
      </Link>
    </div>
    <div className='options'>
      <Link className='option' to='/'>
        Sign In
      </Link>
      <Link className='option-blue' to='/'>
        Sign Up
      </Link>
    </div>
  </div>
)

export default Header;