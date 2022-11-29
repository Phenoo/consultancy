import React from 'react'
import Aboutus from '../components/Aboutus'
import Article from '../components/Article'
import Home from '../components/Home'
import News from '../components/News'
import Offer from '../components/Offer'

const Main = () => {
  return (
    <main>
      <Home />
      <Aboutus />
      <Offer />
      <Article />
      <News />
    </main>
  )
}

export default Main