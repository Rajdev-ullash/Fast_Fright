import React from 'react';
import './NewParcelRequest.css'

const NewParcelRequest = () => {
    return (
        <div>
            <h4>Create new parcel request <span className="m-2" ><button className="m-2 btn btn-outline-primary"> create bulk </button>
                <button className="btn btn-outline-primary" > Import from showUp </button></span> </h4>
            <div className="row contact-form  ">
                <div className="col-md-6">
                    <div className="form-group p-1">
                        <input type="text" name="name" className="form-control" placeholder="Your Name *" />
                    </div>
                    <div className="form-group p-1">
                        <input type="text" name="email" className="form-control" placeholder="Your Email *" />
                    </div>
                    <div className="form-group p-1">
                        <textarea name="message" placeholder="Please enter your address" className="form-control" style={{ width: '100%', height: '150px' }} ></textarea>
                    </div>
                    <div className="form-group p-1">
                        <input type="text" name="phone" className="form-control" placeholder="Your Phone Number *" />
                    </div>
                    <div className="form-group p-1">
                        <input type="text" name="merchantId" className="form-control" placeholder="Your Merchant id *" />
                    </div>
                    <div className="form-group p-1">
                        <input type="text" name="weight" className="form-control" placeholder="Product weight *" />
                    </div>
                    <div className="form-group p-1">
                        <input type="text" name="category" className="form-control" placeholder="Select product category*" />
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="form-group p-1">
                        <input type="text" name="name" className="form-control" placeholder="Cash collection amount *" />
                    </div>
                    <div className="form-group p-1">
                        <input type="text" name="email" className="form-control" placeholder="Price of product  *" />
                    </div>
                    <div className="form-group p-1">
                        <input type="text" name="phone" className="form-control" placeholder="Please share your advice *" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewParcelRequest;