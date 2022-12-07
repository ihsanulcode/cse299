import React, { useEffect, useState } from "react";
import HeaderBody from "../../components/Header/HeaderBody/HeaderBody";
import MiniCard from "../../components/MiniCard/MiniCard";
import checkImage from "../../assets/check.png";
import delivery from "../../assets/delivery.png";
import headphone from "../../assets/headphones.png";
import online from "../../assets/online-payment.png";
import { Container } from "react-bootstrap";
import NewArrival from "../../components/NewArrivalFishes/NewArrival";
import OurSellers from "../../components/OurSellers/OurSellers";
import hilsha from "../../assets/hilsha.jpg";
import rui from "../../assets/rui.jpg";
import chingri from "../../assets/chingri.jpeg";
import "./Home.css";
import Explore from "../../components/Explore/Explore";

function Home() {
  // const fishData = [
  //   {
  //     id: 1,
  //     name: "Hilsha Fish",
  //     weight: "900gm(+/-)",
  //     price: 1500,
  //     fishImage: hilsha,
  //   },
  //   {
  //     id: 2,
  //     name: "Chingri Fish",
  //     weight: "900gm(+/-)",
  //     price: 1500,
  //     fishImage: chingri,
  //   },
  //   {
  //     id: 3,
  //     name: "Rui Fish",
  //     weight: "900gm(+/-)",
  //     price: 1500,
  //     fishImage: rui,
  //   },
  //   {
  //     id: 4,
  //     name: "Hilsha Fish",
  //     weight: "900gm(+/-)",
  //     price: 1500,
  //     fishImage: hilsha,
  //   },
  //   {
  //     id: 5,
  //     name: "Chingri Fish",
  //     weight: "900gm(+/-)",
  //     price: 1500,
  //     fishImage: chingri,
  //   },
  //   {
  //     id: 6,
  //     name: "Rui Fish",
  //     weight: "900gm(+/-)",
  //     price: 1500,
  //     fishImage: rui,
  //   },
  // ];

  const [fishData, setFishData] = useState([]);

  useEffect(() => {
    fetch("https://machbazar-server.vercel.app/fishCards")
      .then((res) => res.json())
      .then((data) => setFishData(data));
  }, []);

  return (
    <div>
      {/* ---------- header section------------------------- */}
      <HeaderBody></HeaderBody>
      {/* -----------------mini cards section--------------------- */}
      <Container className="my-4 text-center">
        <div className="miniCard-container row cols-1 cols-md-2 cols-lg-3 g-2 g-lg-3 justify-items-center">
          <div className="col-12 col-md-6 col-lg-3">
            <MiniCard text={"Quality Product"} image={checkImage}></MiniCard>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <MiniCard text={"Free Shipping"} image={delivery}></MiniCard>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <MiniCard text={"Online Payment"} image={headphone}></MiniCard>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <MiniCard text={"24/7 Support"} image={online}></MiniCard>
          </div>
        </div>
      </Container>
      {/* -------------------Most selling fishes section----------------- */}
      <NewArrival
        title={"Most Selling fishes"}
        fishData={fishData}
      ></NewArrival>
      {/* -------------------------New arrival fishes section-------------- */}
      <NewArrival title={"New Arrival Fishes"} fishData={fishData}></NewArrival>
      {/* ------------------------Our sellers section------------------ */}
      <OurSellers></OurSellers>

      {/* ----------------------- Explore More section -------------------------- */}
      <Explore></Explore>
    </div>
  );
}

export default Home;
