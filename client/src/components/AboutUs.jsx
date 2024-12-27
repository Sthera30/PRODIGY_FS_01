import React from 'react'
import '../css/about.css'
import img2 from '../assets/friends-having-crowded-party-home copy.png'


function AboutUs() {
  return (
    <div className='about-container'>
   
   
           <h3>ABOUT US</h3>
   
           <div className='about-container-inner'>
   
             <div className='about-left'>
   
               <img src={img2} alt="" />
   
             </div>
   
   
             <div className='about-right'>
   
               <h4>Who We Are At Food Eats</h4>
   
               <h5>Our Story</h5>
   
               <p>Founded in 2020, EATS was born from a simple idea: everyone deserves access to delicious, wholesome food made with care. What started as a small family kitchen has grown into a beloved culinary destination, but our core values remain unchanged.
   
                 Every dish we serve carries the warmth of home cooking and the excitement of contemporary cuisine. Our chefs combine time-honored recipes with modern techniques, creating an unforgettable dining experience.
   
               </p>
   
               <button className='btnAboutUs'>Learn More</button>
   
   
             </div>
   
   
           </div>
   
   
         </div>
  )
}

export default AboutUs
