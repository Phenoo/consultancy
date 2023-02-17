import React from 'react'
import Search from '../components/Search'
import Helmet from 'react-helmet'
import Img1 from '../assets/courses.webp'
import { AiOutlineStar } from 'react-icons/ai'


const Courses = () => {
    const data = [
      {
    id: 1,
    image: Img1,
    name: 'trainings',
    },
    {
      id: 2,
      image: Img1,
      name: 'courses',
    },{
      id:3,
      image: Img1,
      name: 'coaching',
    },{
      id: 4,
      image: Img1,
      name: 'consultation',
    }
    ]
  return (
    <div>
      <Helmet>
        <title>
          Gold Sycamore | Courses
        </title>
      </Helmet>
      <div className="blog-home home">
      <section>
        <div className="home-text">
          <h6>
            courses
          </h6>
          <h2>
            Get Solutions To General, Everyday Business Problems
          </h2>
          <button className="button">
              get started
          </button>
        </div>
      </section>
    </div>
    <section>
      <div className='space-between'>
        <div>
          <h4 className='headline'>
            all courses
          </h4>
        </div>
        <Search place='Search courses' />
      </div>
      <div className="courses-cont">
            <div className="wrap">
              {
                data.map(item => {
                  return <div className="course-card" key={item.id}>
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
                  </div>
                })
              }
            </div>
      </div>
     
    </section>
    </div>
  )
}

export default Courses