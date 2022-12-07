import React from "react";
import { Link } from "react-router-dom";
import "./MainNav/MainNav.css";

function JohnDoe({ user, handleLogout }) {
  return (
    <div className="dropdown px-3 ms-2">
      <button
        className="btn border-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {user.displayName}
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link
            className="dropdown-item text-decoration-none"
            to={`/userControls`}
          >
            My Account
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item text-decoration-none"
            to={`/userControls`}
          >
            My Orders
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item text-decoration-none"
            to={`/userControls`}
          >
            My Reviews
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item text-decoration-none"
            to={`/cart/${user.uid}`}
          >
            My Cart
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item text-decoration-none"
            to={`/userControls`}
          >
            My WishList
          </Link>
        </li>
        <li>
          <button
            className="btn btn-light w-100 text-start"
            onClick={handleLogout}
          >
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default JohnDoe;
