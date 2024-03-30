import React from 'react'
import img2 from '../images/img.jpg'

export const Banner = () => {
  return (
    <div id='home' className='banner'>
        <div className='banner-contact'>

        
        <div className='img-box'>
                <img src={img2} alt="" />
              </div>
        {/* <h3>HI</h3> */}
        <h1>I'm <span>Mohamed Web</span> Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, obcaecati pariatur,
             veritatis error eaque animi non voluptate ipsa temporibus quaerat adipisci, aspernatur
              hic corrupti in? Fuga velit tempore esse ut!</p>

              

              <div className='btn-box'>
                <button>Start Project</button>
              </div>
              

              </div>
    </div>
    
  )
}
