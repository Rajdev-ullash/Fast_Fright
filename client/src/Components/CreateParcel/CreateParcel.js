import React from 'react';
import DeliveryCharge from '../DeliveryCharge/DeliveryCharge';
import NewParcelRequest from '../NewParcelRequest/NewParcelRequest';
import './CreateParcel.css'
import { useForm } from "react-hook-form";
import Dropdown from 'react-multilevel-dropdown';
import data from '../../fakeData'
import DropDownMenuSelect from 'react-nested-menu-selector';
const CreateParcel = () => {
  //console.log(district,upazilla);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = data => {
    const url  =`http://localhost:5000/api/createParcel`;
         

        fetch(url,{
            method:'POST',
            headers: {
                'Content-type': 'application/json'},
              body: JSON.stringify(data) 
        })
        .then(res =>console.log('server side response',res) )
  };

  return (

    <div className="row m-3">
      <div className="col-md-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="ship-container">
            <h4>Ship From raj   choose different shop</h4>

            <p>pick up address</p>

          </div>
          
            <div>
              <h4>Create new parcel request  </h4>
              <div className="row contact-form  ">
                <div className="col-md-6">
                  <div className="form-group p-1">
                    <input  className="form-control" placeholder="Customer Name *" {...register("name", { required: true })} />
                  </div>
                  <div className="form-group p-1">
                    <input  className="form-control" placeholder="Customer Email *" {...register("email", { required: true })} />
                  </div>
                  <div className="form-group p-1">
                    <textarea  placeholder="Customer address" className="form-control" style={{ width: '100%', height: '150px' }} {...register("address", { required: true })} ></textarea>
                  </div>
                  <div className="form-group p-1">
                    <input className="form-control" placeholder="Customer Phone Number *" {...register("phone", { required: true })} />
                  </div>
                  
                  <div className="form-group p-1">
                    <input  className="form-control" placeholder="Product weight *" {...register("weight", { required: true })} />
                  </div>
                  <div className="form-group p-1">
                    <label for="cars">Choose a category:</label>
                    <select placeholder="select your category" {...register("category")}>
                      <option value="Liquid">Liquid</option>
                      <option value="Fragile">Fragile</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 ">
                <div className="form-group p-1">
                    <label for="cars">Choose a destination:</label>
                    <select placeholder="select your destination" {...register("destination")}>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Barishal">Barishal</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                    </select>
                  </div>
                  <div className="form-group p-1">
                    <input className="form-control" placeholder="Cash collection amount  *" {...register("cashAmount")} />
                  </div>
                  <div className="form-group p-1">
                    <input  className="form-control" placeholder="Price of product  *" {...register("price")} />
                  </div>
                  <div className="form-group p-1">

                    {/* <input type="text" name="email" className="form-control" placeholder="Price of product  *" /> */}
                  </div>
                  <div className="form-group p-1">
                    <textarea  placeholder="Share your advice" className="form-control" style={{ width: '100%', height: '150px' }} {...register("advice")} ></textarea>
                  </div>

                </div>
              </div>
            </div>
          
          <input type="submit" />
        </form>
       
      </div>
      <div className="col-md-4"> <DeliveryCharge></DeliveryCharge>
      </div>
    </div>


  );
};


export default CreateParcel;