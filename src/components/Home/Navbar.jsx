import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "./img/logo.png";
import "./Navbar.css";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar expand="lg" className="back-color fixed-top pt-0">
        <MDBContainer>
          <MDBNavbarBrand  >
          <Link className="Logo1" to="/" role={"button"}>
          <img src={logoImage} alt="Logo" className="logo-image" />
                </Link>
              
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 nav-btns">
              <MDBNavbarItem>
                <Link className="home-btn" to="/" role={"button"}>
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="about-btn" to="/about" role={"button"}>
                  Our Team
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="pricing-btn" to="/subscription" role={"button"}>
                  Pricing
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="pricing-btn" to="/contactus" role={"button"}>
                  Contact Us
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 nav-btn-signin-wraper">
            
              <MDBNavbarItem>
              <Link to="/signin" role={"button"}>
              <MDBBtn rounded className="mx-2 nav-signin">
                  Sign in
                </MDBBtn>
                </Link>
              </MDBNavbarItem>

              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="margin-bot"></div>
    </header>
  );
}
