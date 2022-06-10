import React from 'react';
import "./paymentTerm.css";

const PaymentTerm = (props) => {
  return (
    <div className='invoice-box-container mt-2'>
       
        <div className='invoice-no-container'>
        <span className='invoice-no-heading'>{props.payment}</span>
        <select className = "invoice-number-input-select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
         
         </select>
        </div>
       
    </div>
  )
}

export default PaymentTerm