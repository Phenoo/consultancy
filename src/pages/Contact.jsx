import React from 'react'
import FormComponents from '../components/FormComponents'

import ContactHome from '../components/ContactHome'
import Location from '../components/Location'

const Contact = () => {
  return (
    <div className='contact-page'>
      <ContactHome />
      <section>
        <FormComponents />
        <Location />
      </section>
    </div>
  )
}

export default Contact