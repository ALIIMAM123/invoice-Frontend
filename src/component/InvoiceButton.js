import React from 'react'
import "./invoiceBUtton.css";
import SendIcon from "../assets/send_icon.svg";

const SendInvoiceButton = () => {
  return (
    
    
    <div className='w-100 mt-3'>
    <button className='button-send-invoice w-100'> <i className='fa fa-user'></i>&nbsp; <img src = {SendIcon } /> Send Invoice</button>
  </div>

  )
}

export default SendInvoiceButton