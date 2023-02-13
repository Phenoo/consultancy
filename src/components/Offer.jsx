import React from 'react';

import Img1 from '../assets/train.webp'
import Img2 from '../assets/courses.webp'
import Img3 from '../assets/coach.webp'
import Img4 from '../assets/consult.webp'

const Offer = () => {
  const data = [{
    id: 1,
    icon: Img1,
    name: 'trainings',
    desc: 'With our trainings, improve the leadership, marketing, and customer experience skills of your team.'
  },
  {
    id: 2,
    icon: Img2,
    name: 'courses',
    desc: 'We have courses that suits your needs whether you are a new or aspiring entrepreneur or an established one. '
  },{
    id:3,
    icon: Img3,
    name: 'coaching',
    desc: 'We connect you to a seasoned business mentor or coach who has useful resources that are relevant to you.'
  },{
    id: 4,
    icon: Img4,
    name: 'consultation',
    desc: 'Get 1:1 expert advice and strategies for implementing solutions for your business challenges.'
  }
  ]

  return (
    <div className='offer'>
      <section>
          <div className='center'>
            <h4 className='headline'>
            You Must Not Feel Stuck Before You Get Help
            </h4>
            <p>
            Our services are designed to fulfill various business goals at any level.
            </p>
          </div>
        <ul className="offers-cont">
          {
            data.map((item, index )=> (
              <li className="box" key={index}>
                <span>
                  <img src={item.icon} alt='offer' />
                </span>
                <h6>{item.name}</h6>
                <p>{item.desc}</p>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}

export default Offer