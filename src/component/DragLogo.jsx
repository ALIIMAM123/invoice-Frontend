import React from 'react'
import "./dragLogo.css";
import LogoImgSelect from "../assets/logo image.svg"

const DragLogo = (props) => {
  return (
    <div className='select-file-container mb-2 '>
         <img src = {LogoImgSelect} className = "file-icons"/>
        <label class="custom-file-upload">
            <input type="file"/>
            {props.Inputplaceholder}
          <span className = "select-new-file"> {props.selectPLaceholder}</span>
        </label>
    </div>
  )
}

export default DragLogo