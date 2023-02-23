import React, {useState} from 'react'
import Search from '../components/Search'
import Modal from '../components/Modal'
import Helmet from 'react-helmet'
import { AiOutlineStar } from 'react-icons/ai'

import Img1 from '../assets/courses.webp'
import Img2 from '../assets/lock.png'


const Courses = () => {
  const [modal, setModal] = useState(false)
  
    const data = [
      {
      id: 1,
      image: Img1,
      name: 'side hustle to main gig',
      rating: ' 4.5 (126)'
    },
    {
      id: 2,
      image: Img1,
      name: 'Launch Like a Pro: Sales, Marketing and Profit',
      rating: ' 4.5 (126)'
    },{
      id:3,
      image: Img1,
      name: 'The Ultimate Customer Experience',
      rating: ' 4.5 (126)'
    },{
      id: 4,
      image: Img2,
      name: 'Course Coming Soon!',
      rating: '---'
    }
    ]
  return (
    <div>
      <Helmet>
        <title>
          Gold Sycamore | Courses
        </title>
      </Helmet>
      <div className="courses-home home">
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
                  return <div className="course-card" key={item.id} onClick={() => setModal(!modal)}>
                    <div className='image'>
                      <img src={item.image} alt="item" />
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
                  </div>
                })
              }
            </div>
      </div>
     
    </section>
    {modal && <Modal setModal={setModal} modal={modal} />}

    </div>
  )
}

export default Courses