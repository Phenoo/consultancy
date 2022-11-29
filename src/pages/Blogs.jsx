import React from 'react'
import BlogContainer from '../components/Blogs/BlogContainer'
import BlogHome from '../components/Blogs/BlogHome'

const Blogs = () => {
  return (
    <div className="blogs">
      <BlogHome />
      <section>
        <BlogContainer />
      </section>
    </div>
  )
}

export default Blogs