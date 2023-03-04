import React from 'react'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'



const News = () => {

  const Items = [
    {
      id: 1,
      name: 'femi bakes',
      job: 'Manager',
      text: `They say clarity comes in motion but I'd say clarity comes with Gold Sycamore. \n
      My session with Ugochi, Lead Consultant at Gold Sycamore, was eye opening. Before now, I was like a troubled drink in a bottle.\n
      But Ugochi gently opened up my bottle, made sense of everything in that bottle, and made sure that all my content remained intact during the 
      unbottling process.\n
      Gold Sycamore has a way of easing tension while making things clear along the way. I left that session knowing what to do in my business. I'd work
      with them over and again.
      `,
      company: 'renowned voice over artist'
    },
    {
      id: 2,
      name: 'doyin olugbade',
      job: 'baker',
      text: `Moving to a new country was hard and I wasn't sure how to continue with with my backing business, post-relocation. \n\n
      Searching for jobs, trying to familiarize myself with the surrondings while hunting for customers was proving difficult. That's when I contacted
      Gold Sycamore and we had a chat. \n\n

      They assisted me by showing how to attract more customers on social media as well as providing me with other insights in order to gerner more
      business in that new country. Thankfully, this worked out for me as I now have an established customer base that is growing steadily.
      `,
      company: 'beeyond sugar cakes'
    },
    {
      id: 3,
      name: 'michael  mosaku',
      job: 'founder',
      text: `I own a honey-producing company and I was looking to learn how to assign roles and put structures in place for my company \n\n
        	I got on a one-off clarity call with Gold Sycamore in October, and it was one of the most productive 30-minute business conversations i had last
          year.\n
          One of the things i took away from that call was clarity on how to define positions and how to assign roles and responsibilities within company.
      `,
      company: 'the shine hive'
    },
    {
      id: 4,
      name: 'goodness purelight',
      job: 'founder and creative director',
      text: `We were making money, but not as much as we wanted. Gold Sycamore helped by providing clarity on the particular products and the service
        that would increase sales and visibility for my business.
        With Gold Sycamore's help, we were able to determine the service that clients were most interested in and capitalize on it. Sales skyrocketed
        after these structures were implemented.
      `,
      company: 'purelight bookstore and publishing'
    },
    {
      id: 5,
      name: 'esther onyemaka',
      job: 'founder',
      text: `In 2021, we wanted to relaunch our radio station, but we didn't have a process in place, so we reached out to Gold Sycamore, had a clarity
      call with them, and their lead consultant, Ugochi Obilonu, put me through how to recruit, how to build a work culture, how to maintain the work culture,
      and also the systems and workflows that the media company neeeded.\n
      We needed that session more than we knew.
      `,
      company: 'the jesus talks radio'
    },
    {
      id: 6,
      name: 'kenny west',
      job: 'manager',
      text: `My music production business had been running unstructured for a long time. A window for funding opportunity finally came through but I needed
        a business plan.\n
        I was wowed at first contact. My vision was excellently and professionally captured with every detail in place; plus they delivered in time.\n
        I stepped up into that pitch session with utmost confidence because of the business plan in my hands. Thank you, Gold Sycamore.
      `, 
      company: 'sound of grace studios'
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
              // dynamicBullets: true,
            }}
            className="swiper height"
          >
            {
              Items.map((item) => {
                return(
                  <SwiperSlide className="swiperslide" key={item.id}>
                    <div className="item review-card">
                        <div className="text">
                          <div>
                            <p>
                              {item.text}
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