import React from 'react'
// import img2 from '..Image/img.jpg'
import img3 from '../images/quran.png'
import img4 from '../images/img4.jpg'
import img5 from '../images/com.png'


export const Project = () => {
  return (
    <div id='project' className='grid'>
        
        <div className='heading-h1'>
            <h1>Project</h1>
        </div>
        <div className='grid-container'>
        <div class="item">
            <img src={img3} alt="" />
            <h2 className='project-h2'>QuranClone Project</h2>
            <p className='project-p'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, laborum voluptas sequi quo nulla iste et corrupti beatae dolor facilis. Molestias ea, sapiente tempore voluptatibus maxime recusandae eveniet minus. Harum.</p>

        </div>
        <div class="item">
            <img src={img4} alt="" />
            <h2 className='project-h1'>Ul Project</h2>
            <p className='project-p'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, laborum voluptas sequi quo nulla iste et corrupti beatae dolor facilis. Molestias ea, sapiente tempore voluptatibus maxime recusandae eveniet minus. Harum.</p>

            </div>
        <div class="item">
            <img src={img5} alt="" />
            <h2 className='project-h1'>ShopingCart Project</h2>
            <p className='project-p'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, laborum voluptas sequi quo nulla iste et corrupti beatae dolor facilis. Molestias ea, sapiente tempore voluptatibus maxime recusandae eveniet minus. Harum.</p>

            </div>
        {/* <div class="item"><img src={img2} alt="" /></div> */}
        </div>

    </div>
  )
}
