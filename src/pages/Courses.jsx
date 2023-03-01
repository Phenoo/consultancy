import React, {useState} from 'react'
import Search from '../components/Search'
import Modal from '../components/Modal'
import Helmet from 'react-helmet'
import { AiOutlineStar } from 'react-icons/ai'

import Img1 from '../assets/courses.webp'


const Courses = () => {
  const [modal, setModal] = useState(false)
  
    const data = [
      {
      id: 1,
      image:  <img src={Img1} alt="item" />,
      name: 'side hustle to main gig',
      rating: ' 4.5 (126)'
    },
    {
      id: 2,
      image:  <img src='https://source.unsplash.com/26MJGnCM0Wc' alt="item" />,
      name: 'Launch Like a Pro: Sales, Marketing and Profit',
      rating: ' 4.5 (126)'
    },{
      id:3,
      image:  <img src='https://source.unsplash.com/5fNmWej4tAA' alt="item" />,
      name: 'The Ultimate Customer Experience',
      rating: ' 4.5 (126)'
    },{
      id: 4,
      image:  <img src={Img1} alt="item" />,
      name: 'Business Foundation Matrix (BFM)',
      rating: '4.5 (126)'
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
      <div className="courses-cont margin">
            <div className="wrap">
              {
                data.map(item => {
                  return <div className="course-card" key={item.id} onClick={() => setModal(!modal)}>
                    <div className='image'>
                      {item.image}
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