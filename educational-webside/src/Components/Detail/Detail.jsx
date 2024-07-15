import React from 'react'
import './Detail.css'
import {BiVideo,BiBook} from 'react-icons/bi'
import {GiTeacher} from 'react-icons/gi'
import {FaCertificate} from 'react-icons/fa'
const Detail = () => {
  return (
    <div>
      <div className="details">
        <div className="detail_container">
          <div className="detail_list">
            <div className="detail_icon">
              <BiVideo/>
            </div>
            <div className="detail">
              <h2>2000+</h2>
              <p>Video Course</p>
            </div>
          </div>
          <div className="detail_list">
            <div className="detail_icon">
              <BiBook/>
            </div>
            <div className="detail">
              <h2>1000+</h2>
              <p>E-books</p>
            </div>
          </div>
          <div className="detail_list">
            <div className="detail_icon">
              <GiTeacher/>
            </div>
            <div className="detail">
              <h2>300+</h2>
              <p>Export Trainers</p>
            </div>
          </div>
          <div className="detail_list">
            <div className="detail_icon">
              <FaCertificate/>
            </div>
            <div className="detail">
              <h2>1000+</h2>
              <p>Certificate issued</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail