import React from "react";
import "./MiniCard.css";

function MiniCard({ image, text }) {
  return (
    <div className="d-flex miniCard align-items-center">
      <img className="miniCard-image" src={image} alt="" />
      <div className="text-bold">{text}</div>
    </div>
  );
}

export default MiniCard;
