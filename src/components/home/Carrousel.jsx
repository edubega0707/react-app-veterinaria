import React from 'react'
import img1 from './img/img1.jpeg'
import img2 from './img/img2.jpeg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpeg'


export const Carrousel =()=>(
   <div className="slider">
        <ul>
            <li>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
            </li>
        </ul>
   </div>
)
