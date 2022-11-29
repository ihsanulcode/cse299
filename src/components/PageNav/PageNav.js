import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import "../MainNav/MainNav.css";
import Categories from "../Header/HeaderBody/Categories/Categories";
import "./PageNav.css";

function PageNav() {
  const cartCount = 0;
  const heartCount = 0;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="d-flex">
            <div className="navbarBrand d-lg-none d-sm-block">
              <Link to="/" className="text-decoration-none">
                <h2 className="fw-bold">Machbazar</h2>
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page">
                  Shop
                </Link>
              </li>

              <li className="nav-item d-lg-none d-md-block d-block">
                <Link className="nav-link " aria-current="page">
                  Cart
                </Link>
              </li>
              <li className="nav-item d-lg-none d-md-block d-block">
                <Link className="nav-link " aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item d-lg-none d-block">
                <Link className="nav-link " aria-current="page" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page">
                  Contract
                </Link>
              </li>
              <li className="nav-item d-lg-none d-block">
                <Categories></Categories>
              </li>
            </ul>
            <div className="d-flex d-lg-block d-none">
              <button className="cart-icon-btn mr-2">
                <FaShoppingCart className="cart-icon"></FaShoppingCart>
                <span className="text-muted">
                  <small>{cartCount}</small>
                </span>
              </button>
              <button className="heart-icon-btn ml-2">
                <FaHeart className="heart-icon" />
                <span className="text-muted">
                  <small>{heartCount}</small>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default PageNav;
