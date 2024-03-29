import React from 'react'
import Img1 from '../../assets/about.webp'
import {  Link } from 'react-router-dom'


const AboutGrid = () => {

  return (
    <div className="about-grid">
        <div className="header">
          <h4 className="headline">
            why work with us ?
          </h4>
          <p>
          This is the part you ask yourself, “why should I work with them?”
          </p>
        </div>
        <div className="grid">
          <div className="div text order-2">
           <div>
              <p>
              It’s pretty simple.
              </p>
              <br />
              <p>
              Long before you ever realized you needed us, we cared enough about you to restructure our company to meet your needs.
              </p>
              <br />
              <p>
              We are not a company that will give you the advice and bolt. We sit together with you to develop the solutions and guide you towards the success you seek. While we don’t do the work for you, we ensure you aren’t doing it by yourself either.
              </p>
              <br />
              <p>
              Ready to grow your business?
              </p>
          </div>
          <br />
          <br />
          <br />
          <div>
            <button className="button">
              <Link to='/services'> 
                let's collaborate            
              </Link>
            </button>
          </div>
          </div>
          <div className="div order-1">
            <img src={Img1} alt='about' />
          </div>
        </div>
    </div>
  )
}

export default AboutGrid