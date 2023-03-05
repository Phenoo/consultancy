import React from 'react'
import Team from '../assets/engineer.svg'

const Faq = () => {

  return (
    <section>
      <div className='engine'>
          <img src={Team} alt='team' />
          <h4>
            Still have questions?
          </h4>
          <p>
            Please chat our friendly team.
          </p>
          <button className='btn btn-blue'>
            <a href="mailto:hello@goldsycamore.com">
              Send a message
            </a>
          </button>
        </div>
        {/* <div className='center'>
          <h4 className='headline'>
            <span>FAQs</span> (Frequently asked questions)
          </h4>
          <br />
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
        </ul> */}
    </section>
  )
}

export default Faq