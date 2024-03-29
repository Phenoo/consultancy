import React from 'react';

import Img2 from '../assets/courses.webp'

const Offer = () => {
  const data = [{
    id: 1,
    icon: <img src='https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=600' alt="item" />,
    name: 'trainings',
    desc: 'With our trainings, improve the leadership, marketing, and customer experience skills of your team.'
  },
  {
    id:2,
    icon: <img src='https://images.pexels.com/photos/3894383/pexels-photo-3894383.jpeg?auto=compress&cs=tinysrgb&w=600' alt="item" />,
    name: 'coaching',
    desc: 'We connect you to a seasoned business mentor or coach who has useful resources that are relevant to you.'
  },
  {
    id: 3,
    icon: <img src={Img2} alt='offer' />,
    name: 'courses',
    desc: 'We have courses that suits your needs whether you are a new or aspiring entrepreneur or an established one. '
  },{
    id: 4,
    icon: <img src='https://img.freepik.com/premium-photo/two-business-partners-discussing-about-their-work_216356-107.jpg?size=626&ext=jpg&ga=GA1.2.1697665057.1678095998&semt=ais' alt='offer' />,
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
                  {item.icon}
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