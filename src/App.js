import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import BillToShipToContainer from './component/BillToShipToContainer';
import PurchaseDetailsContainer from './component/PurchaseDetailsContainer';

import InvoiceButton from './component/InvoiceButton';
import DownloadInvoice from "./component/DownloadInvoiceBtn";
import PaymentSelect from './component/PaymentSelect';



function App() {
  return (
    <div className="App  ">
      <div className='container'>
         <div className='row'>
         <div className = "myNav col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
         <Navbar heading = "Easy Invoice" plan = "upgrade Plan" />
            </div>
         </div>
      </div>
      <div className='container-fluid bg-container pt-5'>
        <div className='container'>
          <div className='row col-md-12'>
              <div className='col-md-9 mywhitediv'>
                <div className='row p-3'>
                   <div className='left-side-form col-md-6 order-2 order-md-1' >
                      <BillToShipToContainer/>
                     
                   </div>
                   <div className=' right-side-form col-md-6 order-1 order-md-2' >
                      <div>
                      <PurchaseDetailsContainer/>
                        {/*<h2 className='invoice-text'>INVOICE</h2>*/}
                      </div>
                   </div>
                </div>
              </div>
              <div className='col-md-3'>
                  <InvoiceButton  />
                  <DownloadInvoice />
                        <hr className='horizontal-line'/>
                   <p className='currency-symbol'>Currency Symbol</p>
                   <PaymentSelect />
              </div>

           
     

          </div>
        </div>
      </div>    
    </div>
  );
}

export default App;
