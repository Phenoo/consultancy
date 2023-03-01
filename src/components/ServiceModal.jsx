import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa'

const  ServiceModal = ({modal, setModal}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setModal(!modal);
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
            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <label>Full Name</label>
                <input type="text" placeholder='Enter Your Full Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className="form-input">
                <label>Business Name</label>
                <input type="text" placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="form-input">
                <label>Email Address</label>
                <input type="email" placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="form-input">
                <label>What Service Are You Interested In?</label>
                <input type="text" placeholder='Eg: Consultation, Coaching, Training etc'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className='btn-div flex'>
              {/* <button onClick={() => setModal(!modal)} className=' white'>
                  cancel
                </button> */}
                <button onClick={handleSubmit} className='button'>
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