import React, {useState, useRef} from 'react'

import emailjs from '@emailjs/browser'


const FormComponents = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [size, setSize] = useState("");

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_USER_ID)
        .then(result => console.log('yes'),
          alert('Sent'),
        error => alert('Please Try Again')
        );
      setName("")
      setEmail("")
      setCompanyName("")
      setSize("")
      setServiceName("")
  }

  return (
    <div className='form-container'>
      <div className="grid">
        <div>
          <h4 className="headline">
            get in touch
          </h4>
          <p>
            Gold Sycamore specialize in providing clarity for owners so that the business can grow.
          </p>
          <p>
          Get in touch with us via email, call or complete the form to learn how we can be of help to you.
          </p>
          <br />
          <a href="mailto:goldsycamore@gmail.com">
            hello@goldsycamore.com
          </a>
          <br />
          <br />
          
        </div>
        <div>
          <h4 className="headline">
            send us a message
          </h4>
          <p>
            Do you have a quick message for us? Kindly send us a message using the form and we will be in touch with you as soon as possible. Thanks!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-input">
              <label>
                Name
              </label>
              <input type="text" placeholder="Jane Doe"
                name="full_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-input">
              <label>
                Email Address
              </label>
              <input type="text" placeholder="janedoe@mail.com" 
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>
            <div className="form-input">
              <label>
                Business Name
              </label>
              <input type="text" placeholder="Gold Sycamore"
                  name="company_name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
              />
            </div>
            <div className="form-input">
              <label>
                Business Size
              </label>
              <input type="text" placeholder="Small or 4"
                name="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              />
            </div>
            <div className="form-input">
              <label>How Can We Help</label>
              <textarea  id="" cols="30" rows="10" placeholder='Write your message here...'
                name="message"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="button">  
            send us a message
            </button>
            <p>
            We’ll be in touch soon
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormComponents