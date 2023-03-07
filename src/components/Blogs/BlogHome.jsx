import React from 'react'

const BlogHome = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  return (
    <div className="blog-home home">
      <section>
        <div className="home-text">
          <h2>
            stay updated with our latest contents
          </h2>
          <button className="button" onClick={() => scrollTo('blog-cont')}>
              get started
          </button>
        </div>
      </section>
    </div>
  )
}

export default BlogHome