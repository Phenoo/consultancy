import React from 'react'
import Aboutus from '../components/Aboutus'
import Home from '../components/Home'
import News from '../components/News'
import Offer from '../components/Offer'

const Main = () => {
  return (
    <main>
      <Home />
      <Aboutus />
      <Offer />
      <News />
    </main>
  )
}

export default Main