import React from 'react'
import Img1 from '../assets/Lawyer1.webp'


const Aboutus = () => {
  return (
    <div className="aboutus">
      <section>
        <div className='grid'>
          <div>
            <img src={Img1} alt='about' />
          </div>
          <div>
            <button className='tag'>
              about us
            </button>
            <h4 className="headline">
              providing clarity for business growth
            </h4>
            <p>
            Lorem ipsum star lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impeditvvvv.
            </p>
            <p>
            Lorem ipsum star lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impeditvvvv.
            </p>
            <p>
            Lorem ipsum star lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impedit eveniet ipsam quasi impeditvvvv.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae at eveniet veniam? Quod recusandae exercitationem quis eius! Sint, corporis ad architecto beatae reprehenderit velit adipisci quam necessitatibus quas dignissimos.
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