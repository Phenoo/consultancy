import React from 'react'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'



import Img1 from '../assets/Lawyer1.webp'

const Team = () => {
  const data = [{
    id: 1,
    name: 'cEO & Founder',
    title: 'matt ensor'
  },
  {
    id: 2,
    name: 'commercial director',
    title: 'sam fieldsen'
  },{
    id:3,
    name: 'digital solutions consultant',
    title: 'mggie koussa'
  },{
    id: 4,
    name: 'head of technology',
    title: 'joseph tan'
  }
  ,{
    id: 5,
    name: 'UX Manager',
    title: 'Barbra Cooke'
  }
  ]
  return (
    <div className='team'>
      <h4 className="headline">
        meet the team
      </h4>
      <div className="team-container">
      <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            loop={true}
            slidesPerView={'auto'}
            pagination={{
              dynamicBullets: true,
            }}
            className="teamswiper"
          >
                    {
          data.map((item) => {
            return (
              <SwiperSlide key={item.id} className="swiperslide">
                <div className="item">
                  <div className="img">
                    <img src={Img1} alt="teaam" />
                  </div>
                  <div className="text">
                    <h4>
                      {item.title}
                    </h4>
                    <h6>
                      {item.name}
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
          </Swiper>
      </div>

    </div>
  )
}

export default Team