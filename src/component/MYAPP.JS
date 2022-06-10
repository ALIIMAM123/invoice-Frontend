import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar";
import BillToShipToContainer from './component/BillToShipToContainer';
import PurchaseDetailsContainer from './component/PurchaseDetailsContainer';

function App() {
  return (
    <div className="App  ">
      <div className = "row ">
      {/*Navbar-start*/}
      <div className='container-fluid'>
         <div className='row'>
         <div className = "myNav col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
         <Navbar heading = "Easy Invoice" plan = "upgrade Plan" />
    </div>
         </div>
      </div>
        
         {/*Navbar-end*/}

         {/* invoice-container-start*/}
             <div className = "container form-and-invoice-download-wrapper mt-2 ">
                <div className='row mx-2 p-5'>
                   <div className=' form-container col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10 '>
                        <div className='row '>
                            <div className='left-half-invoice-form bill-to-ship-to col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 '>
                                <BillToShipToContainer />
                           
                            </div>
                            <div className='right-half-invoice-form col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 '>
                                <PurchaseDetailsContainer />
                            </div>

                          
                           
                            
                           
                        </div>

                         {/*item - quantity - rate-amount-start ___middle section____*/}

                       
                        <div className='row  item__rate__amount___container mx-2 mt-5'>
                        
                            <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 item-container'>
                               <h1 className='item-heading'>Item</h1>
                            </div>
                            <div className=' col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 rate-and-amount-quantity-container'>
                                 <div className=' row rate-details-container'>
                                     <div className='col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 quantity'>Qty.</div>
                                     <div className='col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 rate'>Rate</div>
                                     <div className='col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 amount'>Amount</div>
                                 </div>
                              
                            </div>
                        </div>
                        
                        {/*item - quantity - rate-amount-end ___middle section____*/}
                            
                         
                          
                   
                         
                   </div>
                   <div className='invoice-download-container col-sm- 2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 '>helloo</div>
                </div>
             
             </div>
          {/* invoice-container-end*/}

      </div>
    
    </div>
  );
}

export default App;
