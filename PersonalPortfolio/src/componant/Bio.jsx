import React from 'react'
// import { Header } from './Header'
import img2 from '../images/img.jpg'
   

export const Bio = () => {
  return (
    <div id='bio' className='Bio'>

        <div className='Bio-img'>
            <img src={img2} alt="" />

        </div>

        <div className='Bio-contact'>
            <h2 className='heading'>About <span>Me</span></h2>
            <h3>Web <span>Developer</span></h3>

            <p>Hello! I'm Mohamed, a passionate programmer dedicated to crafting elegant solutions to complex
               problems. With a keen eye for detail and a love for innovation, I thrive on diving deep into
                the world of programming languages and technologies. My journey into programming began with [mention any significant event or experience], igniting a lifelong fascination with the art and science of coding. Whether it's crafting efficient algorithms, designing intuitive user interfaces, or unraveling the mysteries of backend systems, I'm always eager to expand my skills and tackle new challenges. Outside of coding, you can find me [mention any hobbies or interests], always seeking inspiration from the world around me. Let's connect and embark on this exciting journey together</p>
            <a href="#" className='btn-box'> Experience</a>
        </div>


    </div>
  )
}
