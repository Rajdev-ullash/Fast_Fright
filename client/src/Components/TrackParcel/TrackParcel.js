import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
   
    useParams
  } from "react-router-dom";

const TrackParcel = () => {
    let { id } = useParams();
    const [parcel, setParcel] = useState({})
    console.log(parcel);
    console.log(id);

   useEffect(()=>{
       fetch(`http://localhost:5000/api/getSpecificParcel/${id}`)
       .then(res => res.json())
       .then(data =>setParcel(data) )
   },[id])
    
    return (
        <div className="row">
            <div className="col-md-8"> <h5>tracking ID </h5> </div>
            <div className="col-md-4">
                <h6>Parcel ID</h6>
                <h6>Customer address</h6>
                <h6>Customer name</h6>
                <h6>Customer phone number</h6>
                <h6>Area</h6>
                <h6>Weight</h6>
                <h6>Price</h6>
                <h6>Delivery charge</h6>
                <h6>COD charge</h6>
            </div>
            
        </div>
    );
};

export default TrackParcel;