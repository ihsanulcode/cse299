import React from "react";
import { Container } from "react-bootstrap";
import FishCard from "../FishCard/FishCard";
import "./NewArrival.css";

function NewArrival({ title, fishData }) {
  return (
    <div>
      <Container className="cards-container">
        <div className="d-flex justify-content-between">
          <h3>{title}</h3>
          <button className="viewAll-btn text-primary">view all</button>
        </div>
        <hr className="border border-secondary mt-0" />
        <div className="fish-cards">
          {fishData.map((fish) => (
            <FishCard key={fish.id} fish={fish}></FishCard>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default NewArrival;
