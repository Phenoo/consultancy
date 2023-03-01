import React, {useState, useRef} from 'react'
import { FaTimes } from 'react-icons/fa'

import emailjs from '@emailjs/browser'

const  ServiceModal = ({modal, setModal}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [serviceName, setServiceName] = useState("");

  const formRef = useRef()

  const handleSubmit = (e) => {
      e.preventDefault();

      
      
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID)
          .then(result => console.log('yes'),
            setModal(!modal),
            alert('Sent')
          ,
          error => alert('Please Try Again')
          );
          setName("")
          setEmail("")
          setCompanyName("")
          setServiceName("")
  
  }

  return (
    <div className="service-modal">
      <div className='modal-section'>
        <div className='modal-container'>
          <div className='svg'>
            <button onClick={() => setModal(!modal)} >
              <FaTimes color='white' />          
            </button>
          </div>
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="form-input">
                <label>Full Name</label>
                <input type="text" placeholder='Enter Your Full Name'
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required

                  />
              </div>
              <div className="form-input">
                <label>Business Name</label>
                <input type="text" placeholder='Enter Your Email'
                  name="company_name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required

                  />
              </div>
              <div className="form-input">
                <label>Email Address</label>
                <input type="email" placeholder='Enter Your Email'
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
              </div>
              <div className="form-input">
                <label>What Service Are You Interested In?</label>
                <input type="text" placeholder='Eg: Consultation, Coaching, Training etc'
                  name="service_name"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  required
                  />
              </div>
              <div className='btn-div flex'>
                <button type='submit' className='button'>
                  submit
                </button>
                
              </div>
            </form>
            
          </div>
        </div>
    </div>
  )
}

export default ServiceModal 