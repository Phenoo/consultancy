import React from 'react'
import AboutHome from '../components/AboutHome'
import AboutGrid from '../components/AboutGrid'
import AboutVision from '../components/AboutVision'
import Story from '../components/Story'
import Team from '../components/Team'

const About = () => {
  return (
    <div className='about-page'>
      <AboutHome />
      <section>
        <div className="who">
          <button className="tag">
            who are we?
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed atque vitae iusto repudiandae labore accusantium quia, est, quas amet assumenda illum veritatis, quisquam eveniet dolorum vel. Laudantium quisquam, natus sit veniam sapiente odio, iusto velit sunt rerum voluptatibus suscipit!
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