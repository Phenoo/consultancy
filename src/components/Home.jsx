import React from 'react'
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div className='home main-home'>
      <section>
        <div className="home-text">
          <h2>
            We are a growth & transformation <br/> consulting firm.
          </h2>
          <h6 className='flex'>
            Small businesses
          <Typewriter 
          options={{
            autoStart: true,
            loop: true
            }} 
          onInit={(typewriter) => {
          typewriter.typeString(`<span>grow.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span>drive innovation.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span>create jobs.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span>boost economies</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span>have fans.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .start()
        }}
        />
          </h6>
          <p>
            we are your biggest fan.
          </p>
          <button className="button">
            get started
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home