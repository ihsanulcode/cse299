import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./OurSellers.css";
import jasim from "../../assets/jasim.png";
import karim from "../../assets/karim.png";
// import mijan from "../../assets/mijan.png";
import rahim from "../../assets/rahim.png";
import DisplaySeller from "../DisplaySeller/DisplaySeller";

function OurSellers() {
  const [showSellers, setShowSellers] = useState([]);
  const sellers = [
    {
      sellerId: 1,
      name: "Miraz Hossain",
      sellerImage: jasim,
    },
    {
      sellerId: 2,
      name: "Josim Uddin",
      sellerImage: karim,
    },
    {
      sellerId: 3,
      name: "Miraz Hossain",
      sellerImage: jasim,
    },
    {
      sellerId: 4,
      name: "Miraz Hossain",
      sellerImage: rahim,
    },
  ];
  useEffect(() => {
    if (sellers > 4) {
      setShowSellers(sellers.slice(0, 4));
    } else {
      setShowSellers(sellers);
    }
  }, []);

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-between title-container">
          <h3>Our Sellers</h3>
          <button className="viewAll-btn text-primary">view all</button>
        </div>
        <hr className="border border-secondary mt-0" />
        <div className="my-4">
          <div className="seller-container">
            {showSellers.map((seller) => (
              <DisplaySeller
                key={seller.sellerId}
                seller={seller}
              ></DisplaySeller>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurSellers;
