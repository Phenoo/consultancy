import React from 'react'
import FormComponents from '../components/FormComponents'

import ContactHome from '../components/ContactHome'

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
      </section>
    </div>
  )
}

export default Contact