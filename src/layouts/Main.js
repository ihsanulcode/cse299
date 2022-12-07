import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import MainNav from "../components/MainNav/MainNav";

function Main() {
  return (
    <div>
      <MainNav></MainNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Main;
