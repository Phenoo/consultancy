import React, {useState} from 'react'

import CoursesCont from './CoursesCont'
import ServiceModal from '../ServiceModal'



const ServiceOffer = () => {
  const [modal, setModal] = useState(false);


  return (
    <div className="service-container">
      {modal && <ServiceModal setModal={setModal} modal={modal} />}
        <article className='article black'>
          <section>
          <h4 className="headline">
              trainings
            </h4>
            <div className="grid">
              <div className='order-1'>
                <img src='https://source.unsplash.com/vbxyFxlgpjM' alt="item" />
              </div>
              <div className='order-2'>
                <p>
                Typically, a business's owner is not the person who gets in touch with clients first. Most likely, it's a staff.
                <br />
                <br />
                Untrained employees who are not committed to the company's objectives are a recipe for failure.
                <br />
                <br />
                In our corporate training, we focus on solutions for marketing communications, client management, and customer experience.
                <br />
                <br />
                This is an offer you should consider if you've ever had a bad experience with employees.
                </p>
              </div>
            </div>
          </section>

        </article>
        <article className='article '>
          <section>
            <h4 className="headline">
              courses
            </h4>
            <p>
            Our courses are simple to execute and comprehend. Although it might not have the individualized attention that a consulting session offers, courses provide solutions to more general, everyday business problems
            </p>
            <CoursesCont />
          </section>

        </article>
        <article  className='article gold'>
          <section>
          <h4 className="headline">
              coaching
            </h4>
            <div className="grid">
              <div className='order-2'>
                <p>
                From working with previous clients, we observed that social interactions affect learning habits. 
                <br />
                <br />
                  During group coaching, participants learn from the experiences, case studies and scenarios of fellow participants.
                  Our coaching program also fosters industry relationships and collaborations among participants. 
                  <br />
                  <br />
                  If you learn best in vibrant environments made up of brilliant entrepreneurs, our coaching program was designed just for you.              
                </p>
              </div>
              <div className='order-1'>
                <img src='https://source.unsplash.com/46bom4lObsA' alt="item" />
              </div>
            </div>
          </section>
        </article>
        <article className='article'>
          <section>
          <h4 className="headline">
                  consultation
            </h4>
            <div className='grid'>
              <div className=''>
                <img src='https://source.unsplash.com/IgUR1iX0mqM' alt='offer' /> 
              </div>
              <div className=''>
                <p>
                  It's possible that you've tried a number of self-help techniques and free workshops that didn't work for you. You may have even spent hours searching Google and watching YouTube videos in an attempt to solve a specific business problem.
                  <br />
                  <br />
                  These things do not always work for a reason. It's because it wasn't created specifically to address your pain point.
                  <br />
                  <br />
                  For various people, profitability and business growth have different meanings. So here’s when we ask you what profitability looks like to you. 
                  <br />
                  <br />
                  Additionally, there is a reason why some business owners will always prefer customized advice. If you are a 1:1, focus-on-me kinda business owner, we have been waiting on you. 
                  <br />
                  Get clarity and advance your business right away!
                </p>
              </div>
            </div>
          </section>
        </article>
        <br />
        <section>
          <button className="button" onClick={() => setModal(!modal)}>
              book now
          </button>
        </section>
        <br />
        <br />
    </div>
  )
}

export default ServiceOffer