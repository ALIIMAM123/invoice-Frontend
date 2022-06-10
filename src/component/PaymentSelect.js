import React from 'react'
import  "./paymentSelect.css";

const PaymentSelect = () => {
  return (
    <div className='select-currency-symbol mb-3'>
      <select className='currency'>
         <option>USD $ </option>
         <option>INDIA RS </option>
         <option>CHINA</option>
      </select>
    </div>
  )
}

export default PaymentSelect