import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaCheckCircle } from "react-icons/fa";
import cod from "../../assets/cod.png";
import charge from "../../assets/charge.png";
import delivery from "../../assets/delivery.png";
import chat from "../../assets/chat.png";
import "./ProductExtendedView.css";
import { Link, useLoaderData } from "react-router-dom";
import ReviewContainer from "../../components/ReviewContainer";
import { AuthContext } from "../../contexts/AuthProvider";
import { async } from "@firebase/util";

function ProductExtendedView() {
  const [cartItem, setCartItem] = useState({
    user: "",
    name: "",
    price: "",
    quantity: "900",
    image: "",
    type: "cart",
  });
  const fish = useLoaderData();
  const { name, fishImage, price, weight, id } = fish;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    let newItem = { ...cartItem };
    newItem.user = user.uid;
    newItem.name = name;
    newItem.price = price;
    newItem.image = fishImage;
    setCartItem(newItem);
  }, []);

  const handleAddToCart = () => {
    fetch("https://machbazar-server.vercel.app/addCartItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("product added to cart");
        }
      });
    console.log(cartItem);
  };

  return (
    <div>
      <Container className="my-5">
        <Row>
          {/* ----------------------- fish details---------------------- */}
          <Col className="product-container d-lg-flex gx-4" xs="12" lg="8">
            <img className="img-fluid" src={fishImage} alt="" />
            <div className="product-info mt-3 ms-4">
              <h3>{name} (Taza)</h3>
              <p>
                By <span className="text-primary">Karim Ali</span>
              </p>
              <p>
                Category : <span className="fw-bold">Fish</span>
              </p>
              <p>65 Reviews</p>
              <hr />
              <p>
                <small>
                  Net weight will be 10-20% lower depending on cutting
                  preference
                </small>
              </p>
              <div className="d-flex align-items-center">
                <p className="mt-3">Weight:</p>
                <DropdownButton
                  id="dropdown-variants-light"
                  variant="light"
                  title="Choose an Option"
                  className="ms-3"
                >
                  <Dropdown.Item href="#/action-1">{weight}</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">1kg(+/-)</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">1.5kg(+/-)</Dropdown.Item>
                </DropdownButton>
              </div>
              <h3>Tk. {price}</h3>
              <div className="in-stock d-flex align-items-center">
                <FaCheckCircle className="check-icon" />
                <p className="mt-3 ms-2">
                  <small>In Stock</small>
                </p>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-around mb-3">
                <button
                  className="btn btn-light border border-secondary"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button className="btn btn-light border border-secondary">
                  Add to WishList
                </button>
              </div>
            </div>
          </Col>
          {/* -------------------------- store details--------------------- */}
          <Col className="store-detail-container" xs lg="4">
            <div className="store-detail">
              <Container className="mt-3">
                <div className="d-flex align-items-center justify-content-around mt-3">
                  <img src={cod} alt="" />
                  <p className="fw-bold mt-3">Cash on Delivery</p>
                </div>
                <div className="d-flex align-items-center justify-content-around mt-3">
                  <img src={charge} alt="" />
                  <p className="fw-bold mt-3">Delivery Charge</p>
                </div>
                <div className="d-flex align-items-center justify-content-around mt-3">
                  <img src={delivery} alt="" />
                  <p className="fw-bold mt-3">Standard Delivery</p>
                </div>
              </Container>
              <hr />
              <Container className="mb-4">
                <p>
                  <small className="text-muted">sold by</small>
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <p>
                    <small>Black Adam fish house</small>
                  </p>
                  <p>
                    <small className="text-primary d-flex">
                      <img src={chat} alt="" className="chat-icon mx-1" />
                      CHAT
                    </small>
                  </p>
                </div>
                <div className="d-flex my-2 mb-4">
                  <p className="calling-info">
                    <small className="text-secondary">
                      Call our hotline for any information about order :
                    </small>
                  </p>
                  <p className="mt-4">
                    {" "}
                    <small>0132-154466</small>
                  </p>
                </div>
              </Container>
              <hr className="mt-4" />
              <div className="text-center">
                <Link className="text-center text-decoration-none" to="/">
                  <small>Visit Store</small>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* -----------------------reviews section--------------------------- */}
      <div className="reviews-title bg-light">
        <Container>
          <h2 className="mt-2">Reviews</h2>
        </Container>
      </div>
      <div className="enter-review">
        <Container>
          <div className="d-flex justify-content-between not-logged-in-view">
            <div>
              <small>Total 62 Reviews</small>
            </div>
            <div>
              {user?.uid ? (
                <></>
              ) : (
                <div>
                  <small className="mx-2">Please Login to write review</small>
                  <button className="btn border-secondary text-primary">
                    <Link className="text-decoration-none" to={"/login"}>
                      Login
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      <ReviewContainer user={user} id={id}></ReviewContainer>
    </div>
  );
}

export default ProductExtendedView;
