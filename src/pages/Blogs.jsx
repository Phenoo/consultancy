import React from 'react'
import BlogContainer from '../components/Blogs/BlogContainer'
import BlogHome from '../components/Blogs/BlogHome'

import {AiOutlineSearch} from 'react-icons/ai'


const Blogs = () => {
  return (
    <div className="blogs">
      <BlogHome />
      <section>
        <div className="button-container flex ">
          <button className="round active">all article</button>
          <button className="round">article 1</button>
          <button className="round">article 2</button>
          <button className="round">article 3</button>
          <button className="round">article 4</button>
          <button className="round">article 5</button>
        </div>
        <div className="search">
          <form >
            <div className="form-input">
              <div className='flex'>
                <AiOutlineSearch />
                <input type="email" placeholder='Search article' required />
              </div>
              <button className='button'>
                search
              </button>
              </div>
          </form>
        </div>
        <BlogContainer />
      </section>
    </div>
  )
}

export default Blogs