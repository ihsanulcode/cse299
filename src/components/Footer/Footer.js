import React from "react";
import {
  FaMapPin,
  FaMailBulk,
  FaFacebookSquare,
  FaGoogle,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="total-footer bg-black text-white">
      <div className="footer ">
        <div className="m-2">
          <h4>About Store</h4>
          <hr className="border border-2 bg-white" />
          <div className="d-flex align-items-center p-4">
            <div>
              <FaMapPin className="icon m-2" />
            </div>
            <div>
              <p>
                MachBazar{"("}Zulonto Zone{")"} Plot No 5,
              </p>
              <p>Road No-13, Block-C,</p>
              <p>Dhaka Bir Housing</p>
              <p>Gulshan, Dhaka.</p>
            </div>
          </div>
          <div className="d-flex align-items-center p-4">
            <div>
              <FaMailBulk className="icon m-2" />
            </div>
            <div>
              <p>info@machbazar.com.bd</p>
            </div>
          </div>
        </div>
        {/* ------------------------------our services section----------------------------------- */}
        <div className="m-2">
          <h4>Our Services</h4>
          <hr className="border border-2 bg-white" />
          <div className="d-flex align-items-center p-4">
            <div>
              <p>Home</p>
              <p>Shop</p>
              <p>Orders</p>
              <p>Shopping Cart</p>
              <p>WishList</p>
            </div>
          </div>
          <div className="d-flex align-items-center p-4">
            <div className="icon m-2"></div>
            <div>
              <p className="text-black">something unimportant</p>
            </div>
          </div>
        </div>
        {/* --------------------------------Information section---------------------------------- */}
        <div className="m-2">
          <h4>Our Services</h4>
          <hr className="border border-2 bg-white" />
          <div className="d-flex align-items-center p-4">
            <div>
              <p>About Us</p>
              <p>Bengal Fish Online Shop</p>
              <p>Privacy Policy</p>
              <p>Shipping and Replacement</p>
              <p>Terms & Services</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="d-flex align-items-center p-4">
            <div className="icon "></div>
            <div></div>
          </div>
        </div>
        {/* --------------------------------Follow Us section------------------------------------- */}
        <div className="m-2" id="follow">
          <h4>Follow Us</h4>
          <hr className="border border-2 bg-white" />
          <div className="d-flex align-items-center ">
            <div>
              <FaFacebookSquare className="icon m-2" />
            </div>
            <div>
              <FaGoogle className="icon m-2" />
            </div>
            <div>
              <FaYoutubeSquare className="icon m-2" />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------ending of footer------------------------------- */}
      <div>
        <hr className="border border-2 bg-white" />
        <p className="p-4 ms-4 ">
          <span>&copy;</span> 2022 Company,Inc.Privacy . Terms
        </p>
      </div>
    </div>
  );
}

export default Footer;
