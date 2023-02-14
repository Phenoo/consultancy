import React from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home main-home'>
      <section>
        <div className="home-text">
          <h2 className='flex'>
            Small businesses  
          <Typewriter 
          options={{
            autoStart: true,
            loop: true
            }} 
          onInit={(typewriter) => {
          typewriter.typeString(`<span>  grow.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span>  drive innovation.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span>  create jobs.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span>  boost economies</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span>  have fans.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .start()
        }}
        />
          </h2>
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ratione et! Magni, placeat expedita non ea ullam eligendi a architecto. */}
          </p>
          <p>
            we are your biggest fan.
          </p>
          <button className="button">
            <Link to='/about'>
              learn more
            </Link>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home