import React from 'react'
import './Trusted.css'
import glovo from '../../assets/glovo-logo.svg'
import oracle from '../../assets/oracle-logo.svg'
import paypal from '../../assets/paypal-logo.svg'
import stripe from '../../assets/stripe-logo.svg'
import payoneer from '../../assets/payoneer-logo.svg'

const Trusted = () => {
  return (
    <div>
      <div className="trusted">
        <div className="trusted_container">
          <h3 className="trusted_header">Our Alumini works in this company

          </h3>
          <div className="trusted_img">
            <img src={glovo} alt="" />
            <img src={oracle} alt="" />
            <img src={payoneer} alt="" />
            <img src={paypal} alt="" />
            <img src={stripe} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trusted