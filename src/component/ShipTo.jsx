import React from 'react'

import LogoImgSelect from "../assets/logo image.svg"
import "./billTo.css";


const ShipTo = (props) => {
   
  return (
    <div className="form-group bill-to-container mt-2">
    <form>
  <p className = "bill-to">{props.InvoiceShipTo}</p>
    <input type="text" name="name" className='billTo-input' placeholder={props.InvoiceShipBelong}/>
  
</form>
  </div>
  )
}

export default ShipTo;


