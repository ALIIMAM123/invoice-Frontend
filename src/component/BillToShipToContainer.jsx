import React from 'react'
import BillTo from './BillTo';
import DragLogo from './DragLogo';
import InvoiceFrom from "./INvoiceFrom";
import ShipTo from "./ShipTo";
import NewDragFile from "../component/NewDragFile";
import NewInvoiceFrom from "../component/NewInvoiceFrom";

const BillToShipToContainer = () => {
  return (
    <div>
    <NewDragFile  Inputplaceholder = "Drag your logo here or" selectPLaceholder = "select a file"/>
  {/*<DragLogo  Inputplaceholder = "Drag your logo here or" selectPLaceholder = "select a file" />*/}
    {/*<InvoiceFrom InvoiceFromplaceholder = "Who is this invoice from" important = "*"/>*/}
    <NewInvoiceFrom InvoiceFromplaceholder = "Who is this invoice from ?" important = "*"/>
    <BillTo  InvoiceBillTo = "Bill To:"  InvoiceBillBelong = "Who is this invoice to?*"/> 
    <ShipTo InvoiceShipTo = "Ship To:"  InvoiceShipBelong = "Optional"/>
    </div>
  )
}

export default BillToShipToContainer