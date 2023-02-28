import React from 'react'
import {  FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {  BsLinkedin } from 'react-icons/bs'
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
                      <a href='https://facebook.com/thegoldsycamore?mibextid=ZbWKwL'>
                        <FaFacebook />
                      </a>
                    </li>
                    <li className="instagram">
                      <a href='https://instagram.com/goldsycamore?igshid=NTE5MzUyOTU='>
                        <FaInstagram />
                      </a>
                    </li>
                    <li className="twitter">
                      <a href='https://linkedin.com/company/goldsycamore/'>
                        <BsLinkedin />
                      </a>
                    </li>
                    <li className="twitter">
                      <a href='https://youtube.com/@goldsycamore'>
                        <FaYoutube />
                      </a>
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
                    <Link to='/courses'>
                      courses
                    </Link>
                  </li>
                  <li>
                    <Link to='/services'>
                      services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='foot foot-input '>
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