import React from 'react'

const FormComponents = () => {
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
          <form>
            <div className="form-input">
              <label>
                Name
              </label>
              <input type="text" name="name" placeholder="Jane Doe" />
            </div>
            <div className="form-input">
              <label>
                Email Address
              </label>
              <input type="text" name="email" placeholder="janedoe@mail.com" />
            </div>
            <div className="form-input">
              <label>
                Business Name
              </label>
              <input type="text" name="name" placeholder="Gold Sycamore" />
            </div>
            <div className="form-input">
              <label>
                Business Size
              </label>
              <input type="text" name="name" placeholder="Small or 4" />
            </div>
            <div className="form-input">
              <label>How Can We Help</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Write your message here...'></textarea>
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