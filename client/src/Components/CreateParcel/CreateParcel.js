import React from 'react';
import DeliveryCharge from '../DeliveryCharge/DeliveryCharge';
import NewParcelRequest from '../NewParcelRequest/NewParcelRequest';
import './CreateParcel.css'
import { useForm } from "react-hook-form";

const CreateParcel = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <div className="row m-3">
        <div className="col-md-8">
          <div className="ship-container">
            <h4>Ship From raj   choose different shop</h4>
            <input type="text" />
            <p>pick up address</p>
          </div>
          <div>
            <NewParcelRequest></NewParcelRequest>
        </div>
          </div>
        <div className="col-md-4"> <DeliveryCharge></DeliveryCharge>
        </div>
      </div>

    </div>
  );
};


export default CreateParcel;