import React, {useState, useEffect} from 'react'
import BlogCard from './BlogCard'
import { client } from '../../lib/client'

const BlogContainer = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const query = '*[_type == "post"]';
    const post = await client.fetch(query);
    setPosts(post);
    console.log(post)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="blog-container">
      <h4 className="headline">
        recent articles
      </h4>
      <div className="article-container fourgrid">
      {posts &&
                posts?.map(
                  (post) => <BlogCard key={post._id} post={post} />
                )
              }
      </div>
    </div>
  )
}

export default BlogContainer