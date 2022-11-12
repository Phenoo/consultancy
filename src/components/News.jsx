import React from 'react'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Link } from 'react-router-dom'


import { FaCalendar } from 'react-icons/fa'

import User2 from '../assets/right.jpg'
import User3 from '../assets/lawyer5.jpeg'
import User4 from '../assets/shelf.jpeg'
import User1 from '../assets/lawyer7.jpeg'

const News = () => {
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
  ]
  return (
    <div className="news">
      <section>
        <h4 className="headline">
          blogs
        </h4>
        <div className="news-cont">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          loop={true}
          slidesPerView={'auto'}
          pagination={{
            dynamicBullets: true,
          }}
          className="mySwiper height"
        >
          {
            Items.map((item) => {
              return(
                <SwiperSlide className="swiperslide" key={item.id}>
                  <div className="item blog-card">
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
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        </div>
      </section>
    </div>
  )
}

export default News