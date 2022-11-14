import React from 'react';

import { FaSchool,   FaPeace, FaUserAlt } from 'react-icons/fa'
import { MdModelTraining } from 'react-icons/md'

const Offer = () => {
  const data = [{
    id: 1,
    icon: <FaUserAlt />,
    name: 'trainings',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },
  {
    id: 2,
    icon: <FaSchool />,
    name: 'courses',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id:3,
    icon: <FaPeace />,
    name: 'coaching',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id: 4,
    icon: <MdModelTraining />,
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
                <span>{item.icon}</span>
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