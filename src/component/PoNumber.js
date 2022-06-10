import React from 'react'

import LogoImgSelect from "../assets/logo image.svg"
import "./billTo.css";


const BillTo = (props) => {
   
  return (
    <div className="form-group bill-to-container-1 mt-2">
    <form>
     <p className = "bill-to">{props.poNum}</p>
    <input type="text" name="name" className='billTo-input' placeholder={props.InvoiceBillBelong} required/>
  
</form>
  </div>
  )
}

export default BillTo


