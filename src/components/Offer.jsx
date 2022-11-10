import React from 'react';
import { Link } from 'react-router-dom'

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

        <ul className="offers-cont">
          {
            data.map((item, index )=> (
              <li className="box" key={index}>
                <span>{item.icon}</span>
                <h6>{item.name}</h6>
                <p>{item.desc}</p>
                <button className='btn'>
                  <Link to='/services'>
                    read more
                  </Link>
                </button>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}

export default Offer