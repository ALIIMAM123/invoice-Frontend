import React from 'react'
import InvoiceHeading from './InvoiceHeading'
import InvoiceNo from './InvoiceNo'
import Date from "./Date";
import PaymentTerm from "./PaymentTerms";
import PoNumber from "./PoNumber";

const PurchaseDetailsContainer = () => {
  return (
    <div className='purchase-details-container d-flex flex-column'>
     <InvoiceHeading />
     <InvoiceNo name = "Invoice No."/>
     <Date date = "Date" />
     <PaymentTerm payment = "Payment Terms"/>
       <PoNumber  PoNumber  = "PoNumber"  poNum = "4561235"/>
    </div>
  )
}

export default PurchaseDetailsContainer