import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navigation = () => {
  return (
    <nav>
        <section>
          <header>
            <Logo />
            <div className="menulist">
              <ul>
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
                  <Link to='/blog'>
                    about
                  </Link>
                </li>
                <li>
                  <Link to='/about'>
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
          </header>
        </section>
    </nav>
  )
}

export default Navigation