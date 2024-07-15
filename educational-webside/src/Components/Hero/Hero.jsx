import React from 'react'
import './Hero.css'
import classroom from '../../assets/class.jpg'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1 className='hero_header'>Unlock your potential with Top-Tire 
          <br/>Online course</h1>
        <p>Personalized learning experiences designed to help you achieve your professional 
          <br/>personal goals. Gain the skills to excel in today's fast-paced world.   
        </p>
        <div className="btn">
          <button className="cta_button">Explore Courses</button>
        </div>
        <img src={classroom} alt="hero_img" className='hero_img' />
      </div>
    </div>
  )
}

export default Hero