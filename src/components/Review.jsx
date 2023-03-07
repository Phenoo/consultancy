import React, {useState, useEffect} from 'react'
import { client } from '../lib/client'
import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'



const News = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const query = '*[_type == "review"]';
    const post = await client.fetch(query);
    setPosts(post);
  }

  useEffect(() => {
    fetchData();
  }, [])


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
                  }}
                  className="swiper height"
                >
                          {
              posts.map((item, index) => {
                return(
                  <SwiperSlide className='swiperslide' key={item._id}>
                    <article className=' item review-card' >
                      <div className='text'>
                        <div>
                          <p>{item.description}</p>
                        </div>
                      <div className='pro'>
                        <h4>{item.title}</h4>
                          <h6>{item.position}, {item.company}</h6>
                      </div>   
                      </div>   
                    </article>
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