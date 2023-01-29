import React from 'react'
import Img1 from '../assets/aboutus.webp'


const Aboutus = () => {
  return (
    <div className="aboutus">
      <section>
        <button className='tag'>
          about us
        </button>
        <h4 className="headline">
          providing clarity for business growth
        </h4>
        <div className='grid'>
          <div>
            <img src={Img1} alt='about' />
          </div>
          <div>
            <p>
              Businesses often get stuck and need help.
            </p>
            <br />
            <p>
              A good number of business owners and entrepreneurs are aware of the statistics that most businesses fail in the first five years. 
            </p>
              <br />
            <p>
              We know the stats too!

            </p>
            <br />

            <p>
              This is why we launched this business; to equip business owners and their teams with the necessary skills to run sustainable and thriving businesses that create world-wide employment and enhance fulfilment. 
            </p>
            <br />
            <p>
    	      With our unique strategies, which have been tested and trusted, we have been able to create effective methods that keep businesses innovating and thriving
            </p>
            <br />
            <button className="button">
              learn more
            </button>
          </div>
        </div>
      
      </section>
    </div>
  )
}

export default Aboutus