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
    desc: 'Grow your team to become professionals in leadership, marketing and customer experience.'
  },
  {
    id: 2,
    icon: Img2,
    name: 'courses',
    desc: 'Our courses serve 9-5 earners with businesses, new or aspiring entrepreneurs and established entrepreneurs. Whatever your need, we have a course for you. '
  },{
    id:3,
    icon: Img3,
    name: 'coaching',
    desc: 'We connect you to an experienced business mentor/coach with valuable resources suitable for you.'
  },{
    id: 4,
    icon: Img4,
    name: 'consultation',
    desc: 'Get expert advice and strategies for implementing solutions for your business challenges.'
  }
  ]

  return (
    <div className='offer'>
      <section>
          <div className='center'>
            <h4 className='headline'>
              what we  offer
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ipsum molestias nihil non? Maxime aut rem omnis alias inventore.
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