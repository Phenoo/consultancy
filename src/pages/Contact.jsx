import React from 'react'
import FormComponents from '../components/FormComponents'
import Question from '../components/Question'

import {GoLocation} from 'react-icons/go'

const Contact = () => {
  return (
    <div className='contact-page'>
      <section>
        <Question />
        <FormComponents />
        <div className="location">
          <span>
            <GoLocation />
          </span>
          <span>
            <h6>
              Lekki, 21 Pitt Street, Auckland 1010, Australia, QLD 4006.
            </h6>
          </span>
        </div>
      </section>
    </div>
  )
}

export default Contact