import React from 'react';
import Logo from "../Logo/Logo";
import Cookies from 'js-cookie';
import "./NavMob.css";
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
  } from "react-bootstrap";
  
import { Link } from "react-router-dom";
function NavMob() {
    const onClick = (event) => {
        Cookies.remove("accessToken")
      };
    return (
        <Navbar expand={false}>
          <Container fluid>
            <Navbar.Brand style={{ color: "white" }}>
              <Link className="navbar-brand" to="/">
              <Logo />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                M $ M
              </Offcanvas.Title>
            </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/home" className="shortLinksMob">Home</Link>
                <Link to="/about" className="shortLinksMob">About</Link>
                <Link to="/" className="shortLinksMob">FAQs</Link>
                <Link to="/reviews" className="shortLinksMob">Reviews</Link>
                <Link to="/contact" className="shortLinksMob">Contact</Link>
                <Link to="/contact" className="shortLinksMob">
                <div className="navbarMob-login">
                    {!Cookies.get("accessToken") ? 
                    <div className='twoBtn'>
                    <Link className="buttonMob" to="/register">
                        Sign Up
                    </Link>
                    <Link className="buttonMob" to="/login">
                        Log In
                    </Link>
                    </div>
                    :
                    <div className='twoBtnMob'>
                        <Link
                        className="buttonMob"
                        to="/profile"
                        >
                        Profile
                        </Link>
                        <Link
                        className="buttonMob"
                        to="/logout"
                        onClick={onClick}
                        >
                        Log Out
                        </Link>
                        </div>
                        }
                    </div>

                </Link>
               
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      );
}

export default NavMob;