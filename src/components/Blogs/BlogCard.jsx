import React from 'react'
import Img1 from '../../assets/blogcard.webp'

const BlogCard = ({item}) => {
  return (
    <article className="blog-card">
      <div className="image">
        <img src={Img1} alt="blog-card" />
      </div>
      <div className="text">
        <h6>
          15th November, 2022
        </h6>
        <h4>
          Strategy and growth solutions for business
        </h4>
        <p>
          5 minutes read
        </p>
      </div>
    </article>
  )
}

export default BlogCard