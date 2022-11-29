import React from 'react'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'



import User1 from '../assets/client.webp'
import User2 from '../assets/client.webp'
import User3 from '../assets/client.webp'
import User4 from '../assets/client.webp'

const News = () => {
  const Items = [
    {
      id: 1,
      name: 'jude nick',
      svg: User1, 
      job: 'design',
      company: 'lampnet'
    },
    {
      id: 2,
      name: 'anita j',
      svg: User2,  
      job: 'marketing',
      company: 'facebook'
    },
    {
      id: 3,
      name: 'paschol hiks',
      svg: User3,
      job: 'maufacturing',
      company: 'mikano'
    },
    {
      id: 4,
      name: 'timothy spoi',
      svg: User4,
      job: 'sales',
      company: 'airel'
    },
    {
      id: 5,
      name: 'mike daniel',
      svg: User1,
      job: 'sales',
      company: 'distro ng'
    },
  ]
  return (
    <div className="news">
      <section>
        <h4 className="headline">
          hear what our clients have to say!
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
                      <div className="image">
                        <div className="border"></div>
                        <img src={item.svg} alt={item.name} />
                      </div>
                        <div className="text">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti vero cupiditate sint exercitationem temporibus voluptates quis quod voluptatum alias, quidem cumque at eum omnis nulla? Illo nesciunt eum harum accusantium quae, possimus laudantium ullam blanditiis quas dignissimos! Quidem, pariatur.
                            </p>
                          </div>
                          <div className="pro">
                            <h4>{item.name}</h4>
                            <h6>
                              {item.job}, {item.company}.
                            </h6>
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

export default News