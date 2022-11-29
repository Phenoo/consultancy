import React from 'react'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'



import Img2 from '../../assets/team3.webp'
import Img1 from '../../assets/team1.webp'
import Img3 from '../../assets/team2.webp'

const Team = () => {
  const data = [{
    id: 1,
    image: Img1,
    name: 'cEO & Founder',
    title: 'matt ensor'
  },
  {
    id: 2,
    image: Img2,
    name: 'commercial director',
    title: 'sam fieldsen'
  },{
    id:3,
    image: Img3,
    name: 'digital solutions consultant',
    title: 'mggie koussa'
  },{
    id: 4,
    image: Img1,
    name: 'head of technology',
    title: 'joseph tan'
  }
  ,{
    id: 5,
    image: Img2,
    name: 'UX Manager',
    title: 'Barbra Cooke'
  }
  ]
  return (
    <div className='team'>
      <h4 className="headline">
        meet the team
      </h4>
      <section>
        <div className="team-container">
        <Swiper
              modules={[Pagination]}
              spaceBetween={70}
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
                      <img src={item.image} alt="teaam" />
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
      </section>
    </div>
  )
}

export default Team