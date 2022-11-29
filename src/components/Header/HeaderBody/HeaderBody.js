import React from "react";
import Categories from "./Categories/Categories";
import PageNav from "../../PageNav/PageNav";
import "./HeaderBody.css";
import { Container } from "react-bootstrap";
import Banner from "../../PageNav/Banner";

function HeaderBody() {
  return (
    <div>
      <Container className="header-body mt-4">
        <div className="d-none d-lg-block mt-2">
          <Categories></Categories>
        </div>
        <div className="mt-2">
          <Container>
            <PageNav className="d-sm-none d-lg-block"></PageNav>
            <Banner></Banner>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default HeaderBody;
