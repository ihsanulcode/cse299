import React from "react";
import carousel_1 from "../../assets/carousel_1.png";
import carousel_2 from "../../assets/carousel_2.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner py-4rem">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner darkened-img">
            <div className="carousel-item active">
              <img
                src={carousel_1}
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={carousel_2}
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div className="banner-text text-light d-flex flex-column align-items-center">
            <p className="lg-py-2 text-center">
              Explore Various types of Fishes from Home
            </p>
            <h1 className="lg-py-2 text-center">
              Fresh Fish in Reasonable Price
            </h1>

            <button className="btn btn-light">Shop Now</button>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
