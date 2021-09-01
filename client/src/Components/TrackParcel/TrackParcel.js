import React from "react";
import "./TrackParcel.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TrackParcel = () => {
  let { id } = useParams();
  const [parcel, setParcel] = useState({});
  console.log(parcel);
  // console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/api/getSpecificParcel/${id}`)
      .then((res) => res.json())
      .then((data) => setParcel(data.result[0]));
  }, [id]);
  console.log(parcel);
  const {
    customerName,
    uniqueNumber,
    customerNumber,
    customerAddress,
    productPrice,
    deliveryArea,
    weight,
    _id,
  } = parcel;
  return (
    <div style={{minHeight:'100vh'}} className ='d-flex align-items-center track-parcel-body'>
      <div className="row shadow w-75 mx-auto rounded p-4 align-items-center bg-white">
        {/* <div className="d-flex justify-content-center body-color shadow"> */}
        <div className="col-md-6" >
          <h5 className="">
            Tracking ID: <span style={{ color: "tomato" }}>{_id}</span>{" "}
          </h5>
        </div>
        <div className="col-md-6">
          <h6>
            Parcel ID : <span style={{ color: "tomato" }}>{uniqueNumber}</span>{" "}
          </h6>
          <h6>
            Customer address :{" "}
            <span style={{ color: "tomato" }}>{customerAddress}</span>
          </h6>
          <h6>
            Customer name:{" "}
            <span style={{ color: "tomato" }}>{customerName}</span>
          </h6>
          <h6>
            Customer phone number :{" "}
            <span style={{ color: "tomato" }}>{customerNumber}</span>
          </h6>
          <h6>
            Area : <span style={{ color: "tomato" }}>{deliveryArea}</span>
          </h6>
          <h6>
            Weight: <span style={{ color: "tomato" }}>{weight}</span>
          </h6>
          <h6>
            Price : <span style={{ color: "tomato" }}>{productPrice}</span>
          </h6>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default TrackParcel;
