import React, { useState } from 'react'
import Accordion from './Accordion'

const data = [
  {
    id: 1,
    title: 'What is [Company Name]?',
    answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptates alias cupiditate provident illum inventore culpa vel laboriosam, quas itaque. Recusandae ea odio ex voluptatem.`
  },
  {
    id: 2,
    title: 'What do I need to have a  account?',
    answer: 'For Nigerian users, phone number and Bank Verification Number (BVN) are required, whereas only a phone number is required for US users.'
  },
  {
    id: 3,
    title: 'How do I send money to a [Comany Name] user?',
    answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptates alias cupiditate provident illum inventore culpa vel laboriosam, quas itaque. Recusandae ea odio ex voluptatem.`

  },
  {
    id: 4,
    title: 'How do I transfer money to a bank account?',
    answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptates alias cupiditate provident illum inventore culpa vel laboriosam, quas itaque. Recusandae ea odio ex voluptatem.`

  },
  {
    id: 5,
    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit?',
    answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptates alias cupiditate provident illum inventore culpa vel laboriosam, quas itaque. Recusandae ea odio ex voluptatem.`
  },
]

const Faq = () => {
  const [ask, setAsk] = useState(data)

  return (
    <section>
      <div className='faq'> 
        <div className='center'>
          <h4 className='headline'>
            <span>FAQs</span> (Frequently asked questions)
          </h4>
          <p className='sub'>
            Everything you need to know about the product
          </p>
        </div>

        <ul className='faq-container'>
        {
            ask.map(question  => {
              return <Accordion key={question.id} {...question} set={setAsk} />
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Faq