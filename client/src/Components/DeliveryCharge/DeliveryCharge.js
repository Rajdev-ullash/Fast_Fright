import React from 'react';
import './DeliveryCharge.css'
const DeliveryCharge = () => {
    return (
        <div className="m-3 delivery-container p-3 ">
            <h4>Delivery charge in details</h4>
           <div className="d-flex justify-content-between borderBottom ">
           <div>  <p>cash collection</p>
            <p>delivery charge</p>
            <p>code charge</p>
            </div>
            <div >
            <p>tk 90</p>
            <p>tk 90</p>
            <p >tk 90</p>
            
            </div>
           </div>
           <div className="d-flex justify-content-between">
               <p>Total Payable Amount</p>
               <p>tk 270</p>
           </div>
            
        </div>
    );
};

export default DeliveryCharge;