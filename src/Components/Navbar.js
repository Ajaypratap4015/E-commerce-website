import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import logo from "../pictures/logo.png";
import "./Navbar.css";

const Navbar = ({ settings }) => {
  const Cart = useSelector((state) => state.reducer.cart);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Navbar rendered");
  }, [Cart]);

  return (
    <div className="nav-bar">
      <NavLink to="/home">
        <div className="nav-logo">
          <img src={logo} alt="" width={"80px"} />
          <p>Flipmart</p>
        </div>
      </NavLink>
      <div className="nav-links">
        <div className="navlink-container">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "activenav" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "activenav" : "")}
          >
            Products
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "activenav" : "")}
          >
            Orders
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "activenav" : "")}
          >
            Settings
          </NavLink>
        </div>
      </div>
      <div className="nav-cart">
        <button onClick={() => navigate("/cart")}>
          <span className="cart-icon">
            <BsCart />
          </span>
          <p>{Cart.length}</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
