import React from "react";
import explore from "../../assets/explore-section-image.png";
import "./Explore.css";

function Explore() {
  return (
    <div className="explore-more">
      <div className="explore-section-image">
        <img src={explore} alt="" />
      </div>
      <div className="explore-message">
        <div className="message mx-auto text-center ">
          <h3>Fresh Fish Processing Cycle</h3>
          <hr />
          <p>
            The quicker it is frozen, the fresher it is. Therefore we stock
            frozen at sea. we are passionate about our products and hand pack
            and deliver your frozen fish. So they arrive at your home in perfect
            condition.
          </p>
          <button className="w-100 btn btn-light border">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default Explore;
