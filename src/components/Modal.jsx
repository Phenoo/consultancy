import React, {useRef} from 'react'
import { useState } from 'react'
import { CgDanger } from 'react-icons/cg'

import emailjs from '@emailjs/browser'


const  Modal = ({setModal, modal}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const formRef = useRef()


  const data = [
    {
    id: 1,
    name: 'Side Hustle To Main Gig',
  },
  {
    id: 2,
    name: 'Launch Like a Pro: Sales, Marketing and Profit',
  },{
    id:3,
    name: 'The Ultimate Customer Experience',
  },{
    id: 4,
    name: 'Business Foundation Matrix (BFM)',
  }
  ]
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_USER_ID)
        .then(result => setModal(!modal),
          alert('Email Sent'),
        error => alert('Please Try Again')
        );
    setName("")
    setEmail("");
    setCourse("");
  }
  return (
    <div className="modal">
      <div className='modal-section'>
        <div className='modal-container'>
          <CgDanger />
          <div className='text'>
            <h4>
              Interested in this course? 
            </h4>
            <p>
              We are launching soon. Stay updated by joining the waitlist.
              Access pre-launch price when you join now!
            </p>
          </div>

            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="form-input">
                <label>Full Name</label>
                <input type="text" placeholder='Enter Your Full Name'
                  value={name}
                  name="full_name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  
                  />
              </div>
              <div className="form-input">
                <label>Email Address</label>
                <input type="email" placeholder='Enter Your Email'
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
              </div>

              <div className="form-input">
                <label>What course do you want? </label>
                <select onChange={event => setCourse(event.target.value)}
                  name="course_name"
                required>
                {data.map((item, index) => (
                    <option value={`${item.name}`} key={index}
                      name="course_name">
                        {item.name}</option> 
                  )
                  )}
                  </select>
              </div>
              
              <div className='btn-div flex'>
              <button onClick={() => setModal(!modal)} className=' white'>
                  cancel
                </button>
                <button type='submit' className='button'>
                join waitlist
                </button>
                
              </div>
            </form>
            
          </div>
        </div>
    </div>
  )
}

export default Modal 