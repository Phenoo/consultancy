import React from 'react'
import Img1 from '../assets/aboutus.webp'
import { Link } from 'react-router-dom'


const Aboutus = () => {
  return (
    <div className="aboutus">
      <section>
        <button className='tag'>
          about
        </button>
        <h4 className="headline">
        What’s The Worth Of Your Business?
        </h4>
        <div className='grid'>
          <div>
            <img src={Img1} alt='about' />
          </div>
          <div>
            <p>
            And no, we are not asking about the net worth of your business (even though that’s important).
            </p>
            <br />
            <p>
            What is the value of your company to you? How much commitment are you willing to put in to guarantee that the vision you have in mind corresponds with - or even exceeds - the reality of what your business is right now?
            </p>
              <br />
            <p>
            If you feel stuck, worn out, and unmotivated at the thought of your business, you are right where you need to be.
            </p>
            <br />
            <p>
            We get it! we recognize that businesses have difficulties from time to time, and most days, we just wish someone could take our hands, lead the way, and participate in the implementation process.
            </p>
            <br />
            <p>
            That’s exactly what we do!
            </p>
            <br />
            <p>
            We inspire hope in small businesses. We support businesses like yours to get unstuck and revived. We  also provide strategies and solutions that solvethe current challenges you are facing.
            </p>
            <br />
            <button className="button">
              <Link to='/about'>
                let's team up
              </Link>
            </button>
          </div>
        </div>
      
      </section>
    </div>
  )
}

export default Aboutus