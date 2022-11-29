import React from 'react'
import Img1 from '../assets/aboutus.webp'


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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestias pariatur atque quam ad deserunt itaque veritatis eveniet, praesentium accusantium maiores quis cum expedita vel, debitis explicabo perspiciatis iusto eos quibusdam officiis dolores error? Minima harum veniam eum velit autem error! Omnis aliquam tempore asperiores quaerat deleniti possimus voluptate adipisci, sapiente expedita, quos odit maxime ratione, nisi illo repellat nihil incidunt quia doloremque? Assumenda similique vel earum eveniet delectus rerum id, minus quidem. Odio ex placeat minima, doloribus consequatur optio facere quam nihil commodi vitae ullam cumque doloremque vero a eos, magnam quidem labore odit. Quisquam labore itaque cupiditate magnam.
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