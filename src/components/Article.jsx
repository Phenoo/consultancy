import React, {useState, useEffect} from 'react'
import BlogCard from './Blogs/BlogCard'
import {client} from '../lib/client'

const Article = () => {
  const [posts, setPosts] = useState([])
  const fetchData = async () => {
    const query = '*[_type == "post"]';
    const post = await client.fetch(query);
    setPosts(post);
  }
  useEffect(() => {
    fetchData();
  }, [])

  const filterItems = posts?.filter((item, index) => index < 3);
  return (
    <div className="article-section">
      <section>
        <div className="center">
          <h4 className="headline">
            real business insights
          </h4>
          <p>
          Our business blogs somehow manages to keep you hooked. We reduce the complexity of business to ABC.
          </p>
        </div>
        <div className="article-container fourgrid">
        {filterItems &&
              filterItems?.map(
                (post) => <BlogCard key={post._id} post={post} />
              )
            }
        </div>
      </section>
    </div>
  )
}

export default Article