import React, { useEffect, useState, useRef } from 'react'

const ScrollUp = () => {
  const [fixed, setFixed] = useState('');
  const btnRef = useRef(null);


  useEffect(() => {
    const windowScroll = () => {
      let windowHeight = window.scrollY
  
      if(windowHeight > 300){
        setFixed('fixed');
      } else{
        setFixed('')
      }
    }

    window.addEventListener('scroll', windowScroll);
  })

  
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  return (
    <div ref={btnRef} className={`scrollup ${fixed}`} onClick={() => scrollTo('nav')}>
        &#x2191;
    </div>
  )
}

export default ScrollUp