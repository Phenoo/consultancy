import React from 'react'
import BlogContainer from '../components/Blogs/BlogContainer'
import BlogHome from '../components/Blogs/BlogHome'
import Search from '../components/Search'
import Helmet from 'react-helmet'



const Blogs = () => {
  return (
    <div className="blogs">
      <Helmet>
        <title>
          Gold Sycamore | Blogs
        </title>
      </Helmet>
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
        <Search />
        <BlogContainer />
      </section>
    </div>
  )
}

export default Blogs