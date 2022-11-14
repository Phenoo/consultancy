import React from 'react'
import {  FaFacebook, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail} from 'react-icons/ai'
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
                We specialize in providing clarity for small business owners so that their business can grow.
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
                    <li className="linkedin">
                      <FaLinkedinIn />
                    </li>
                </ul>
              </div>
            </div>
            <div className="footer-links">
              <div className="foot">
                <h6>Company</h6>
                <ul>
                  <li>
                    <Link to='/about'>
                      about us
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
              <div className="foot foot-mail">
                <h6>
                  contacts
                </h6>
                <ul>
                  <li>
                    <span>
                      <FaPhone />
                    </span>
                    <span>
                      <p>+234 7037 873 2633</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <AiOutlineMail />
                    </span>
                    <span>consulatncy@gmail.com</span>
                  </li>
                </ul>
              </div>
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