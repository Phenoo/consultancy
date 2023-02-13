import React from 'react'

import {BsShieldCheck, BsBarChart} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineShop} from 'react-icons/ai'
import { VscBriefcase } from 'react-icons/vsc'
import {HiOutlineUserGroup, HiOutlineUsers} from 'react-icons/hi'


const WhatOffer = () => {
  const data = [
    {
      icon: <AiOutlineShop />,
      title: 'Identify their target market'
    },
    {
      icon: <AiOutlineLike />,
      title: 'Articulate their offer precisely and coherently'
    },
    {
      icon: <HiOutlineUserGroup />,
      title: 'Attract their desired audience'
    },
    {
      icon: <VscBriefcase />,
      title: ' Structure the business in a way that promotes sustainability and longevity'
    },    
    {
      icon: <HiOutlineUsers />,
      title: 'Serve their clients/customers excellently'
    },    {
      icon: <BsBarChart />,
      title: 'Address challenges as they arise'
    },
    {
      icon: <BsShieldCheck />,
      title: 'Launch their new business or product properly'
    },
  ]
  return (
    <div className="what-we-offer-section">
      <section>
        <h4 className="headline">
          what we offer
        </h4>
        <p>
        There is absolutely nothing wrong with getting inspired by other businesses on Instagram. WHere it becomes a concern is when you are constantly tweaking your brand/business messages to look like theirs.
        </p>
        <br />
        <p>
        In running any business, think sustainability, longevity and transgenerational.
        </p>
        <br />
        <p>
        You are in business for a reason and your WHY must always inform the business actions you take. 
        </p>
        <br />
        <p>
        At Gold Sycamore, we recognized that a number of clients want one or more of the solutions listed below. They want to:
        </p>
        <div className="what-we-offer">
          {
            data.map((item, index) => (
              <article key={index}>
                <div>
                  {item.icon}
                </div>
                <div>
                  <p>
                    {item.title}
                  </p>
                </div>
              </article>
            ))
          }
        </div>
        <p>
        Whichever adequately describes you, best believe we have a ready solution.
        </p>
        <br />
        <p>
        Again, you'll probably stand out more when you concentrate primarily on your company rather than your rivals.
        </p>
      </section>
    </div>
  )
}

export default WhatOffer