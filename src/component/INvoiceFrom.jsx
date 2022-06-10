import React from 'react'
import "./dragLogo.css";
import LogoImgSelect from "../assets/logo image.svg"
import "./invoiceFrom.css";

const InvoiceFrom = (props) => {
    const {textContent1} = props
    console.log(textContent1)
  return (
    <div className='select-file-container invoice-from-container'>
         {/*<img src = {LogoImgSelect} className = "file-icons"/> */}
        <label class="custom-file-upload">
            <input type="text" className='invoice-input-element' placeholder= "Who is this Invoice from?"/>
            {/*props.InvoiceFromplaceholder */}
          <span className = "select-new-file"> {props.important}</span>
        </label>
    </div>
  )
}

export default InvoiceFrom 