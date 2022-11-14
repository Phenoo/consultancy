import React from 'react'
import FormComponents from '../components/FormComponents'

import ContactHome from '../components/ContactHome'
import Location from '../components/Location'

import Helmet from 'react-helmet'


const Contact = () => {
  return (
    <div className='contact-page'>
      <Helmet>
        <title>
          Gold Sycamore | Contact Us
        </title>
      </Helmet>
      <ContactHome />
      <section>
        <FormComponents />
        <Location />
      </section>
    </div>
  )
}

export default Contact