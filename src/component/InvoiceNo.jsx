import React from 'react';
import "./invoiceNo.css";

const InvoiceNo = (props) => {
  return (
    <div className='invoice-box-container'>
       
        <div className='invoice-no-container'>
        <span className='invoice-no-heading'>{props.name}</span>
          <div className = "hash-container">#</div>
          
          <input type = "text"  className = "invoice-number-input"/>
         
         
        </div>
       
    </div>
  )
}

export default InvoiceNo