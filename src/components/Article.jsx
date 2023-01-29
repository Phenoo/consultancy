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
            real business insights
          </h4>
          <p>
            There is something about our business blogs that keeps you glued. 
            We make business complexities as simple as ABC.
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