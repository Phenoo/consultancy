import React from 'react'
import AboutHome from '../components/About/AboutHome'
import AboutGrid from '../components/About/AboutGrid'
import AboutVision from '../components/About/AboutVision'
import Story from '../components/About/Story'
import Team from '../components/About/Team'
import Helmet from 'react-helmet'

const About = () => {
  return (
    <div className='about-page'>
      <Helmet>
        <title>
          Gold Sycamore | About
        </title>
      </Helmet>
      <AboutHome />
      <section id='about-cont'>
        <div className="who">
          <button className="tag">
            who are we?
          </button>
          <p>
          In a congested industry, you can distinguish your business. You are not required to follow the crowd. 
          Your business can stand out and shine because success has a definitive meaning to you.
          <br />
          <br />
            Gold Sycamore is a digital consulting firm offering marketing and business development strategies to businesses globally. 
          </p>
        </div>
        <Story />
      </section>
      <AboutVision />
      <section>
        <AboutGrid />
        <Team />
      </section>
    </div>
  )
}

export default About