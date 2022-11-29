import React from "react";
import "./DisplaySeller.css";

function DisplaySeller({ seller }) {
  const { name, sellerImage } = seller;
  return (
    <div className="display-seller p-4 text-center">
      <img src={sellerImage} alt="" />
      <p>{name}</p>
      <a className="text-decoration-none">View Profile</a>
    </div>
  );
}

export default DisplaySeller;
