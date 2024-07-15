import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png'
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="content_left">
            <p>From beginners to advanced learners,find courses that fit your level and information</p>
            <h2>Edukative</h2>
            <div className="social_icons">
              <img src={facebook} alt="social_icons" className='icons' />
              <img src={twitter} alt="social_icons" className='icons'/>
              <img src={linkedin} alt="social_icons" className='icons' />
            </div>
          </div>
          <div className="content_center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="content_right">
            <h2>Get In Touch</h2>
            <ul>
              <li>Phone: (+977) 9704793967</li>
              <li>Email: chapagainsirish@gmail.com</li>
              <li>Address:123 Business,kathamandu,Nepal</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className="copyright">Copy right @comapny. All right Reserved</p>
      </div>
    </div>
  )
}

export default Footer