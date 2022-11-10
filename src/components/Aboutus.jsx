import React from 'react'
import Img1 from '../assets/Lawyer1.webp'


const Aboutus = () => {
  return (
    <div className="aboutus">
      <section>
        <div className='grid'>
          <div>
            <h4 className='headline'>
              about us
            </h4>
            <p>
            Lorem ipsum star lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impeditvvvv.
            </p>
            <br/>
            <p>
            Lorem ipsum star lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impeditvvvv.
            </p>
            <br/>
            <br/>
            <p>
            Lorem ipsum star lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impeditvvvv.
            </p>
          </div>
          <div>
            <img src={Img1} alt='about' />
          </div>
        </div>
      
      </section>
    </div>
  )
}

export default Aboutus