import React from 'react'
// import {FaYoutube} from 'react-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'

export const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
        <h1 className='Skills-heading'> M<span>y Ski</span>lls</h1>
        <div className='skills-cards'>
            <div className="skills-card">
            {/* <FaYoutube/> */}
            <FontAwesomeIcon icon={faLaptop} />
            
            
                <h2>Web Design</h2>
                <p>Experienced in web design with a keen eye for user interface and user experience (UI/UX) design 
                  principles. Proficient in HTML, CSS, and JavaScript, with a strong understanding of responsive 
                  design and cross-browser compatibility. Skilled in Adobe Creative Suite and experienced in 
                  creating visually appealing and functional websites tailored to client needs</p>
            </div>

            <div className="skills-card">
            <FontAwesomeIcon icon={faCode} />
                <h2>Back End Developer</h2>
                <p>Proficient in back-end development, specializing in languages such as Python, Java, or PHP, with a
                   strong understanding of database management systems like MySQL or MongoDB. Experienced in building
                    scalable and efficient server-side applications and APIs, with a focus on security and performance 
                    optimization. Skilled in problem-solving and collaborating with cross-functional teams to deliver 
                    robust back-end solutions</p>
            </div>

            <div className="skills-card">
            <FontAwesomeIcon icon={faPenNib} />
                <h2>Graphic Designer</h2>
                <p>Skilled graphic designer with expertise in Adobe Creative Suite, including Photoshop, Illustrator, 
                  and InDesign. Experienced in creating visually compelling designs for print and digital media, with
                   a strong understanding of typography, color theory, and layout principles. Adept at translating 
                   client visions into engaging visual assets that resonate with target audiences.</p>
            </div>
        </div>
        

    </div>
  )
}
