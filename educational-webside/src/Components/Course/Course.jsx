import React from 'react';
import './Course.css';
import { FaChartSimple } from 'react-icons/fa6'; // Ensure this is the correct import path

const Course = ({ course }) => {
  if (!course) {
    return null;
  }
  
  const { image, name, price, standard } = course;

  return (
    <div>
      <div className="course_card">
        <img src={image} alt="course_img" className="course_img" />
        <h3 className="course_name">{name}</h3>
        <h4 className="course_price">${price}</h4>
        <p className="course_standard">
          <FaChartSimple className='analytic' /> {standard}
        </p>
        <button className="course_button">Explore</button>
      </div>
    </div>
  );
};

export default Course;
