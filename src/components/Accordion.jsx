import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


const Accordion = ({title, answer, id}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <li onClick={handleClick} className='question'>
      <div className='header'>
        <div className='heading'>
          <div>
            <h5>0{id}</h5>
          </div>
          <div>
          <h6>{title}</h6>
          </div>
        </div>
        <div>
          <button>
          {
          show ? <AiOutlineMinus /> : <AiOutlinePlus/> 
        }
          </button>
        </div>
      </div>
      {
        show && 
      <div>
        <p>{answer}</p>  
      </div>
      }
  </li>
  )
}

export default Accordion