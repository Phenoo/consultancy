import React from 'react'
import BlogCard from './Blogs/BlogCard'

const Article = () => {
  const data = [{
    id: 1,
    name: 'trainings',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },
  {
    id: 2,
    name: 'courses',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  },{
    id:3,
    name: 'coaching',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
  }
  ]
  return (
    <div className="article-section">
      <section>
        <div className="center">
          <h4 className="headline">
            our latest articles
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fuga voluptatem placeat magni voluptatibus enim eius molestias, veniam doloribus suscipit voluptas, provident tempora optio excepturi.
          </p>
        </div>
        <div className="article-container fourgrid">
          {
            data.map(item => {
              return (
                <BlogCard key={item.id} item={item} />
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Article