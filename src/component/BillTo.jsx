import React from 'react'

import LogoImgSelect from "../assets/logo image.svg"
import "./billTo.css";


const BillTo = (props) => {
   
  return (
    <div className="form-group bill-to-container mt-2">
    <form>
     <p className = "bill-to">{props.InvoiceBillTo}</p>
    <input type="text" name="name" className='billTo-input' placeholder={props.InvoiceBillBelong} required/>
  
</form>
  </div>
  )
}

export default BillTo


