import React from 'react';
import "./date.css";

const Date = (props) => {
  return (
    <div className='invoice-box-container mt-2'>
       
        <div className='invoice-no-container'>
        <span className='invoice-no-heading'>{props.date}</span>
        
           
          <input type = "date"  className = "invoice-number-input"  />
         
         
        </div>
       
    </div>
  )
}

export default Date