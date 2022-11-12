import React from 'react'

const FormComponents = () => {
  return (
    <div className='form-container'>
      <h4 className="headline">
        get in touch
      </h4>
      <p>
        we are here to help, complete the form below and we will get back to you as soon as possible.
      </p>
      <form>
        <div className="form-input">
          <input type="text" name="name" placeholder="enter your name" />
        </div>
        <div className="form-input">
          <input type="text" name="email" placeholder="enter your email" />
        </div>
        <div className="form-input">
          <input type="text" name="name" placeholder="enter your organization" />
        </div>
        <div className="form-input">
          <input type="text" name="name" placeholder="enter your phone" />
        </div>
        <div className="form-input">
          <textarea name="" id="" cols="30" rows="10" placeholder='how can we help'></textarea>
        </div>
        <button type="submit" className="btn btn-submit">  
          send
        </button>
      </form>
    </div>
  )
}

export default FormComponents