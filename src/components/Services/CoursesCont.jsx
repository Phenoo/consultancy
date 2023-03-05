import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../assets/courses.webp'


import {AiOutlineStar} from 'react-icons/ai'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const CoursesCont = () => {
  const data = [
    {
    id: 1,
    image:  <img src={Img1} alt="item" />,
    name: 'side hustle to main gig',
    rating: ' 4.5 (126)'
  },
  {
    id: 2,
    image:  <img src='https://source.unsplash.com/26MJGnCM0Wc' alt="item" />,
    name: 'Launch Like a Pro: Sales, Marketing and Profit',
    rating: ' 4.5 (126)'
  },{
    id:3,
    image:  <img src='https://source.unsplash.com/5fNmWej4tAA' alt="item" />,
    name: 'The Ultimate Customer Experience',
    rating: ' 4.5 (126)'
  },{
    id: 4,
    image:  <img src={Img1} alt="item" />,
    name: 'Business Foundation Matrix (BFM)',
    rating: '4.5 (126)'
  }
  ]
  return (
    <div className='courses-cont'>
      <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            loop={true}
            slidesPerView={'auto'}
            pagination={{
              // dynamicBullets: false,
            }}
            className="mySwiper teamswiper"
          >
            {
              data.map((item) => {
                return(
                  <SwiperSlide className="swiperslide" key={item.id}>
                    <article className="course-card">
                      <div className='image'>
                        {item.image}
                      </div>
                      <div className="text">
                        <h4>
                          {item.name}
                        </h4>
                        <div className="flex">
                          <p>
                            <AiOutlineStar />
                          </p>
                          <p>
                            {item.rating}
                          </p>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
              <button className='button'>
                <Link to='/courses'>
                  see more
                </Link>
              </button>
    </div>
  )
}

export default CoursesCont