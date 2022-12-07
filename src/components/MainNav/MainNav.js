import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import JohnDoe from "../JohnDoe";
import "./MainNav.css";

function MainNav() {
  const [searchedProductName, setSearchedProductName] = useState("");
  const [fishCategories, setFishCategories] = useState([]);

  const navigate = useNavigate();

  // -------------------------handling user state(logged in or logged out)----------------
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  // ------------------------handling product search------------------
  useEffect(() => {
    fetch("https://machbazar-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setFishCategories(data));
  }, []);

  const handleSetSearchedProductName = (event) => {
    setSearchedProductName(event.target.value);
  };

  const handleProductSearch = () => {
    const fish = fishCategories.find((f) => f.name === searchedProductName);
    navigate(`/categories/${fish.id}`);
  };

  return (
    <div className="main-nav mt-4 shadow-sm">
      <nav>
        <Container className="d-flex justify-content-between align-items-center">
          <div className="navbarBrand ">
            <Link to="/" className="text-decoration-none">
              <h2 className="fw-bold">Machbazar</h2>
            </Link>
          </div>
          <div className="searchfield d-flex">
            <input
              type="text"
              placeholder="search for products"
              id="product-search"
              onChange={handleSetSearchedProductName}
            />
            <button className="bg-white border-light">
              <FaSearch className="icon" onClick={handleProductSearch} />
            </button>
          </div>
          <div>
            {user?.uid ? (
              <JohnDoe user={user} handleLogout={handleLogout}></JohnDoe>
            ) : (
              <div className="d-none d-lg-block loginBlock mx-auto">
                <Link to="/login">Login</Link>
                <Link to="/register">Registration</Link>
              </div>
            )}
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default MainNav;
