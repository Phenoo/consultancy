import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

import Img1 from '../assets/certify.png'

const Navigation = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav id="nav">
        <section>
          <header>
            <Logo />
            <div className={`menulist ${navbar ? 'show' : ''}`}>
              <ul onClick={() => setNavbar(!navbar)}>
                <li>
                  <NavLink to='/'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    about us
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/services'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    our services
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/blogs'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    templates
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contact'
                    className={({isActive}) => (isActive ? 'active' : '') }
                  >
                    contact us
                  </NavLink>
                </li>
              </ul>
            </div>
            <button className='mobile' onClick={() => setNavbar(!navbar)}>
              {
                navbar ? <FaTimes /> : <FaBars />
              }
              {
                navbar && <div className='img-nav'>
                  <img src={Img1} alt="done" />
                </div>
              }
            </button>
          </header>
        </section>
    </nav>
  )
}

export default Navigation