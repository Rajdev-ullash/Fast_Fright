import React from 'react';
import DeliveryCharge from '../DeliveryCharge/DeliveryCharge';
import NewParcelRequest from '../NewParcelRequest/NewParcelRequest';
import './CreateParcel.css'
import { useForm } from "react-hook-form";
import Dropdown from 'react-multilevel-dropdown';
import data from '../../fakeData'

const CreateParcel = () => {
  //console.log(district,upazilla);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


const thana= data?.map(location=> location.upazilla);
console.log(thana);


  return (

    <div className="row m-3">
      <div className="col-md-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="ship-container">
            <h4>Ship From raj   choose different shop</h4>
           
            <label for="cars">Choose a location:</label>
  <select name="location" id="locationId">
    {
      data.map( location => <option>{location.district}</option>)
    }
  </select>
  <br />
  <label for="cars">Choose a location:</label>
  <select name="location" id="locationId">
    {
      data.upazilla?.map( location => <option>{location}</option>)
    }
  </select>

            <p>pick up address</p>
            
          </div>
          <div>
            {/* <NewParcelRequest></NewParcelRequest> */}
            <div>
              <h4>Create new parcel request  </h4>
              <div className="row contact-form  ">
                <div className="col-md-6">
                  <div className="form-group p-1">
                    <input type="text" name="name" className="form-control" placeholder="Customer Name *" />
                  </div>
                  <div className="form-group p-1">
                    <input type="text" name="email" className="form-control" placeholder="Customer Email *" />
                  </div>
                  <div className="form-group p-1">
                    <textarea name="message" placeholder="Customer address" className="form-control" style={{ width: '100%', height: '150px' }} ></textarea>
                  </div>
                  <div className="form-group p-1">
                    <input type="text" name="phone" className="form-control" placeholder="Customer Phone Number *" />
                  </div>
                  <div className="form-group p-1">
                    <input type="text" name="merchantId" className="form-control" placeholder=" Merchant invoice id *" />
                  </div>
                  <div className="form-group p-1">
                    <input type="text" name="weight" className="form-control" placeholder="Product weight *" />
                  </div>
                  <div className="form-group p-1">
                  <label for="cars">Choose a location:</label>
                  <select placeholder="select your category" {...register("category")}>
        <option value="female">Liquid</option>
        <option value="male">Fragile</option>
        <option value="other">other</option>
      </select>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-group p-1">
                  <label for="cars">Choose a location:</label>
  <select name="location" id="locationId">
    {
      data.map( location => <option>{location.district}</option>)
    }
  </select>
                  </div>
                  <div className="form-group p-1">
                    <input type="text" name="email" className="form-control" placeholder="Cash collection amount  *" />
                  </div>
                  <div className="form-group p-1">
                    <input type="text" name="email" className="form-control" placeholder="Price of product  *" />
                  </div>
                  <div className="form-group p-1">
                    <textarea name="message" placeholder="Share your advice" className="form-control" style={{ width: '100%', height: '150px' }} ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-4"> <DeliveryCharge></DeliveryCharge>
      </div>
    </div>


  );
};


export default CreateParcel;