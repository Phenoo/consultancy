import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from './Logo'

import Img1 from '../assets/certify.png'

const Navigation = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav>
        <section>
          <header>
            <Logo />
            <div className={`menulist ${navbar ? 'show' : ''}`}>
              <ul onClick={() => setNavbar(!navbar)}>
                <li>
                  <Link to='/'>
                    home
                  </Link>
                </li>
                <li>
                  <Link to='/services'>
                    services
                  </Link>
                </li>
                <li>
                  <Link to='/about'>
                    about
                  </Link>
                </li>
                <li>
                  <Link to='/blog'>
                    blog
                  </Link>
                </li>
                <li>
                  <Link to='/contact'>
                    contact
                  </Link>
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