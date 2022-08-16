import React from 'react'
import "./NavDeskTop.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
const NavDeskTop = () => {
    const onClick = (event) => {
        Cookies.remove("accessToken")
      };
  return (
     
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-logo">
          <Logo />
        </div>
        <div className="navbar-container">
          <Link to="/home" className="shortLinks">Home</Link>
          <Link to="/about" className="shortLinks">About</Link>
          <Link to="/" className="shortLinks">FAQs</Link>
          <Link to="/reviews" className="shortLinks">Reviews</Link>
          <Link to="/contact" className="shortLinks">Contact</Link>
        </div>
        <div className="navbar-login">
          {!Cookies.get("accessToken") ? 
          <>
          <Link className="button" to="/register">
            Sign Up
          </Link>
          <Link className="button" to="/login">
            Log In
          </Link>
          </>
          :
          <>
            <Link
              className="button"
              to="/profile"
            >
              Profile
            </Link>
            <Link
              className="button"
              to="/logout"
              onClick={onClick}
            >
              Log Out
            </Link>
            </>
            }
        </div>
      </div>
    </div>
  )
}

export default NavDeskTop