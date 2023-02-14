import React from 'react'
import {  FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <section>
          <div className="footer-container">
            <div className="footer-desc">
              <Logo />
              <p>
              Providing clarity for business growth.
              </p>
              <div className="social">
                <ul>
                    <li className="facebook">
                      <FaFacebook />
                    </li>
                    <li className="instagram">
                      <FaInstagram />
                    </li>
                    <li className="twitter">
                      <FaTwitter />
                    </li>
                </ul>
              </div>
            </div>
              <div className="foot">
                <h6>Company</h6>
                <ul>
                  <li>
                    <Link to='/about'>
                      about us
                    </Link>
                  </li>
                  <li>
                    <Link to='/services'>
                      services
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact'>
                      contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="foot">
                <h6>
                  resources
                </h6>
                <ul>
                  <li>
                    <Link to='/services'>
                      services
                    </Link>
                  </li>
                  <li>
                    <Link to='/template'>
                      templates
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='foot'>
                <h6>
                  join our mailing list
                </h6>
                <div className="form-input">
                  <input type="email" placeholder='Enter your email address' />
                  <div>
                    <button className="button">subscribe</button>
                  </div>
                </div>
              </div>
              <div className="foot foot-mail">
                <h6>
                  contacts
                </h6>
                <ul>
                  <li>
                    <a href="mailto:hello@goldsycamore.com">
                      hello@goldsycamore.com
                    </a>
                  </li>
                  <li>
                    <a href="tel">Phone Number</a>
                  </li>
                </ul>
              </div>
          </div>
        </section>
        <p className='copy'>
              &copy; copyright 2022 gold sycamore limited. all rights reserved.
          </p>
      </div>
    </footer>
  )
}

export default Footer