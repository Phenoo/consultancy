import React from 'react'



import 'swiper/css'
import 'swiper/css/pagination'



import { FaCalendar } from 'react-icons/fa'

import User2 from '../assets/right.jpg'
import User3 from '../assets/lawyer5.jpeg'
import User4 from '../assets/shelf.jpeg'
import User1 from '../assets/lawyer7.jpeg'
import { Link } from 'react-router-dom'


const Blogs = () => {
  const Items = [
    {
      id: 1,
      name: 'an overworked newspaper editor',
      svg: User1, 
      job: 'design',
    },
    {
      id: 2,
      name: 'a solution built for teachers and students',
      svg: User2,  
      job: 'marketing',
    },
    {
      id: 3,
      name: '11 tips to help you get new clients',
      svg: User3,
      job: 'maufacturing',
    },
    {
      id: 4,
      name: 'Attract more attention, sales, profit',
      svg: User4,
      job: 'sales',
    },
    {
      id: 5,
      name: 'home to make crazy sales weekly',
      svg: User1,
      job: 'sales',
    },
    {
      id: 6,
      name: '11 tips to help you get new clients',
      svg: User3,
      job: 'maufacturing',
    },
    {
      id: 7,
      name: 'Attract more attention, sales, profit',
      svg: User4,
      job: 'sales',
    },
    {
      id: 8,
      name: 'home to make crazy sales weekly',
      svg: User1,
      job: 'sales',
    },
    {
      id: 9,
      name: 'home to make crazy sales weekly',
      svg: User1,
      job: 'sales',
    },

  ]
  return (
    <div className="blogs">
      <section>
        <h4 className="headline">
          Consulta in the news
        </h4>
        <h6>
          Various articles have been written about us and how it revolutionises engagements.
        </h6>
        <div className="blog-cont">
          {
            Items.map((item) => {
              return(
                  <div className="item blog-card" key={item.id}>
                      <img src={item.svg} alt={item.name} />
                      <div className="text">
                        <p className='flex'>
                          <FaCalendar  /> 11 July, 2022
                        </p>
                        <h4>{item.name}</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit periam unde officiis ex ab voluptate.
                        </p>
                        <button className="btn">
                        <Link to='/blogs'>
                          read more
                        </Link>
                        </button>
                      </div>
                    </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Blogs