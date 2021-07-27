import React from "react";
import "./Choose_us.css";
// import { Card, Carousel } from "react-bootstrap";
import delivery from "../../../../image/Delivery-Icon.png";
import Search from "../../../../image/search.png";
import Security from "../../../../image/Security-Icon.png";
import Trolley from "../../../../image/Trolley-Icon.png";
import Wallet from "../../../../image/Wallet-Icon.png";
import Choose_detail from "../Choose_detail/Choose_detail";

const choose_data = [
  {
    name: "Transparent Pricing",
    des: "International supply chains involves challenging regulations.",
    img: Wallet,
  },
  {
    name: "Real-Time Tracking",
    des: "Ensure customer's supply chains are fully compliant by practices.",
    img: Search,
  },
  {
    name: "Warehouse Storage",
    des: "Depending on your product, we provide warehouse activities",
    img: Trolley,
  },
  {
    name: "Security For Cargo",
    des: "High security requirements and certified to local standards",
    img: Security,
  },
  // {
  //   name: "Fast & Efficient Delivery",
  //   des: "We enhance our operations by relieving you of the worries.",
  //   img: delivery,
  // },
];
const Choose_us = () => {
  return (
    <div className="choose mt-5">
      <div className="text-center p-5">
        <h6 style={{ color: "#FDBC24" }}>Our Features</h6>
        <h1 className="text-white">Why Choose Us!</h1>
        <p className="choose-title">
          We continue to pursue that same vision in today's complex, uncertain
          world,
          <br /> working every day to earn our customers’ trust!
        </p>
      </div>
      <div className="row w-100" >
        {choose_data.map((choose) => (
          <Choose_detail choose={choose} key={choose.name} />
        ))}
      </div>
    </div>
  );
};

export default Choose_us;
