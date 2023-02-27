import React from 'react'
import Moment from 'moment'
import {urlFor} from '../../lib/client'
import { Link } from 'react-router-dom'

const BlogCard = ({post}) => {
  const formatDate = Moment(post.publishedAt).format("MMM Do, YYYY.")

  return (
    <article className="blog-card">
      <div className="image">
      <img src={urlFor(post.mainImage)} alt="blog-card" />
      </div>
      <div className="text">
        <h6>
          {formatDate}
        </h6>
        <h4>
          {post.title}
        </h4>
        <p>
          {post.description.substring(0, 110)}
        </p>
        <br />
        <span>
          <Link to={`/blog/${post.slug.current}`}>
            read more
          </Link>
        </span>
      </div>
    </article>
  )
}

export default BlogCard