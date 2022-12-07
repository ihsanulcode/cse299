import React from "react";
import { Link } from "react-router-dom";
import "./FishCard.css";

function FishCard({ fish }) {
  const { name, weight, price, fishImage } = fish;
  return (
    <div>
      <div className="card my-2 text-center " style={{ width: "18rem" }}>
        <img src={fishImage} className="card-img-top img-fluid" alt="fish" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>
            <small>{weight}</small>
          </p>
          <p className="card-text fw-bold">Tk {price}.00</p>

          <Link
            className="btn btn-light border border-primary"
            to={`/productExtendedView/${fish.id}`}
          >
            {" "}
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FishCard;
