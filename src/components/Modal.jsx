import React from 'react'
import { useState } from 'react'
import { CgDanger } from 'react-icons/cg'

const  Modal = ({setModal, modal}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("")
    setEmail("");
    setModal(!modal);
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

            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <label>Full Name</label>
                <input type="email" placeholder='Enter Your Full Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  
                  />
              </div>
              <div className="form-input">
                <label>Email Address</label>
                <input type="email" placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
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