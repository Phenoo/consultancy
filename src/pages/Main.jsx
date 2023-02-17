import React from 'react'
import Aboutus from '../components/Aboutus'
import Article from '../components/Article'
import Home from '../components/Home'
import Review from '../components/Review'
import Offer from '../components/Offer'
// import Faq from '../components/Faq'

const Main = () => {
  return (
    <main>
      <Home />
      <Aboutus />
      <Offer />
      <Article />
      <Review />
      {/* <Faq /> */}
    </main>
  )
}

export default Main