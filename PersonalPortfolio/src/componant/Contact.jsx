import React from 'react'

export const Contact = () => {
  return (
    <div id='contact' className='contact-form'>
        <h2 className='contact-me'>Contact <span>Me</span></h2>

        <form action="#">
            <div className='input-box'>
                <input type="text" placeholder='Full Name' />
                <input type="email" placeholder='Email'/>
            </div>

            <div className='input-box'>
                <input type="number" placeholder='Phone Number' />
                <input type="text" placeholder='Subject'/>
            </div>

            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <input type="submit" value="Send Message" className='btn-box'/>

        </form>


    </div>
  )
}
