import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <section>
          <div className="footer-container">
            <Logo />
            <div className="footer-links">
              <div className="foot">
                <h6>quick links</h6>
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
              <div className="foot">
                <h6>
                  why us?
                </h6>
                <ul>
                  <li>Professionalism</li>
                  <li>Quality Assurance</li>
                  <li>Global Best Practices</li>
                  <li>vast experience</li>
                </ul>
              </div>
              <div className="foot">
                <h6>
                  contact us
                </h6>
                <ul>
                  <li>
                    <span></span>
                    <span>
                      <p>+234 7037 873 2633</p>
                    </span>
                  </li>
                  <li>
                    <span></span>
                    <span>consulatncy@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="foot">
                <h6>
                  connect with us on social media
                </h6>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <p className='copy'>
              copyright &copy; lampnets co ltd 2022. all rights reserved.
            </p>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer