import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import MainNav from "../components/MainNav/MainNav";

function UserControlLayout() {
  return (
    <div>
      <MainNav></MainNav>
      <Row>
        <Col>left side button group navigation</Col>
        <Col lg={6} md={12}>
          <Outlet></Outlet>
        </Col>
        <Col></Col>
      </Row>
      <Footer></Footer>
    </div>
  );
}

export default UserControlLayout;
