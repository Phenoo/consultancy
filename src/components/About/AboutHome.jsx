import React from 'react'

const AboutHome = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  return (
    <div className='about-home home'>
      <section>
        <div className="home-text">
          <h2>
            your growth is our growth
          </h2>
          <p>
          </p>
          <button className="button" onClick={() => scrollTo('about-cont')}>
            learn more
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutHome