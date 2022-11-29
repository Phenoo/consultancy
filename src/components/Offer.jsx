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
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },
  {
    id: 2,
    icon: Img2,
    name: 'courses',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id:3,
    icon: Img3,
    name: 'coaching',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id: 4,
    icon: Img4,
    name: 'consultation',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  }
  ]

  return (
    <div className='offer'>
      <section>
        <h4 className='headline'>
          what we  offer
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ipsum molestias nihil non? Maxime aut rem omnis alias inventore.
        </p>
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