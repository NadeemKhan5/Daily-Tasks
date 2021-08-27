import React from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import Contact from "./Contact";
import Register from "./Register";

function Header() {
  const myLi = {
    float: "left",
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize:"25px"
  };

  const myUl = {
    listStyleType: " none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "cyan",
  };

  return (
    <div>
      <ul style={myUl}>
        <li style={myLi}>
          <p style={{float: "left", margin:0}}>Header</p>
        </li>
        <li style={myLi}>
          <Link to="/">Home</Link>
        </li>
        <li style={myLi}>
          <Link to="/contact">Contact</Link>
        </li>
        <li style={myLi}>
          <Link to="/login">Login</Link>
        </li>
        <li style={myLi}>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
