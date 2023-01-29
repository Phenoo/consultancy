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
      <section>
        <div className="who">
          <button className="tag">
            who are we?
          </button>
          <p>
          We are a vibrant set of business experts who are committed to growing sustainable businesses. 
          <br />
            Like we say among ourselves, “We sleep, breathe and think about business growth all the time”. 
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