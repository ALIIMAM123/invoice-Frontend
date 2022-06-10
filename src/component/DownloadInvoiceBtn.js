import React from 'react'
import "./downloadinvoiceBtn.css";
import SendIcon from "../assets/send_icon.svg";
import DownloadButton from "../assets/download_icon.svg";

const DownloadInvoiceButton = () => {
  return (
    <div className='w-100 mt-3'>
    <button className='download-button-send-invoice w-100'> <i className='fa fa-user'></i>&nbsp; <img src = {DownloadButton } /> Send Invoice</button>
  </div>

  )
}

export default DownloadInvoiceButton