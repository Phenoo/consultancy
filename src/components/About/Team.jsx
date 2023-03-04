import React from 'react'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { AiOutlineMail } from 'react-icons/ai'

import Img2 from '../../assets/team2.webp'
import Img1 from '../../assets/team1.webp'
import Img3 from '../../assets/team3.jpeg'

const Team = () => {
  const data = [
    {
      id: 1,
      image: Img2,
      title: 'lead consultant',
      name: 'Ugochi Obilonu'
    },
    {
    id: 2,
    image: Img1,
    name: 'Omotunde Oyebola Funmilayo',
    title: 'head of legal'
  },{
    id:3,
    image: Img3,
    title: 'creative strategist',
    name: 'Chidinma Obilonu'
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
                // dynamicBullets: true,
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
                        {item.name}
                      </h4>
                      <div className='space-between'>
                        <h6>
                          {item.title}
                        </h6>
                        <span className=''>
                          <AiOutlineMail />
                        </span>
                      </div>
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