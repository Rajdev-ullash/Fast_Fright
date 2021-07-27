import React from "react";
import "./Choose_detail.css";
import { Card, Carousel } from "react-bootstrap";
const Choose_detail = (props) => {
  console.log(props.choose);
  const { name, des, img } = props.choose;
  return (
    <div className="col-md-3  mb-5">
      <div className="d-flex justify-content-center ">
        <Card
          className="choose-card"
          style={{
            width: "18rem",
            height: "250px",
            padding: "10px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <img
            src={img}
            alt=""
            style={{ width: "50px", marginLeft: "20px", color: "#FDBC24" }}
            className="mt-4 mb-2"
          />
          <Card.Body>
            <Card.Title className="title">{name}</Card.Title>
            <Card.Text className="mt-3 description">{des}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Choose_detail;
