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
    name: 'trainings',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
    },
    {
      id: 2,
      name: 'courses',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
    },{
      id:3,
      name: 'coaching',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
    },{
      id: 4,
      name: 'consultation',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
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
              dynamicBullets: true,
            }}
            className="mySwiper teamswiper"
          >
            {
              data.map((item) => {
                return(
                  <SwiperSlide className="swiperslide" key={item.id}>
                    <article className="course-card">
                      <img src={Img1} alt="item" />
                      <div className="text">
                        <h4>
                          Growth Strategy And Business Model
                        </h4>
                        <div className="flex">
                          <p>
                            <AiOutlineStar />
                          </p>
                          <p>
                            4.5 (126)
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